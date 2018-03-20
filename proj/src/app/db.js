// See https://github.com/Jias/natty-fetch for more details.
import { monStorage, Storage } from 'clientConfig/util/StoreData';
let nattyFetch = require('natty-fetch');
nattyFetch.setGlobal({
    // 配置整个项目所有接口的参数中都包含`session`字段
    query: {
        session: monStorage.get('user.session')
    }
});
const context = nattyFetch.context({
    mockUrlPrefix: '/mock/',
    urlPrefix: '/', 
    header: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    mock: false,
    withCredentials: false,
    traditional: true,
    urlStamp: false,
    urlMark: false,
    timeout: 0,
    fit: function (response) {
        return {
            success: response.success,
            content: response.content,
            error: {
                errorMsg: response.errorMsg,
                errorCode: response.errorCode,
                errorLevel: response.errorLevel
            }
        }
    }
});
context.create('Notice', {
    get_notice_lists: {
        mockUrl: 'query/getListInfo.json',
        url: 'notice/tcrReceivedNotices'
    },
    get_sentnotice_lists: {
        mockUrl: 'query/getListInfo.json',
        url: 'notice/tcrSentNotices'
    },
    get_org_lists: {
        mockUrl: 'query/getOrgListInfo.json',
        url: '/notice/tcrSentNotices'
    }
});

module.exports = context.api;

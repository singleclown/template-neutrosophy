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
    urlPrefix: '/app/', 
    header: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    mock: false,
    withCredentials: false,
    traditional: true,
    urlStamp: true,
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
context.create('Auth', {
    get_free_login: {
        url: '/auth/getConfig'
    },
    get_user_info: {
        url: '/user/userinfo'
    },
    get_redis_info:{
        url:'/redis/getUserByRedis'
    }
});
context.create('Teacher', {
    get_award_lists: {
        url: 'award/teacher/tchAwardList'
    },
    get_award_detail: {
        url: 'award/resource/getAwardDetail'
    },
     get_class_lists: {
        url: 'baseApi/teacher/tchNewClassList'
    }
});
context.create('Parent', {
    get_award_lists: {
        url: 'award/parent/prtAwardList'
    }
});
module.exports = context.api;

const Actions = require('./actions');
const DB = require('app/db.js');
import { Toast } from 'saltui';
import { Storage } from 'clientConfig/util/StoreData';
module.exports = Reflux.createStore({
    listenables: [Actions],
    data: {

    },

    onFetch: function(params, cb) {
        let t = this;
        DB.Parent.add_dinner_order({
            schoolId: Storage.get('user.schoolId'),
            talkId: Storage.get('user.talkId'),
            orderId: ''
        }).then((content) => {
            if (content && content.code === '1') {
                if (content.data) {
                    Object.assign(t.data, content.data)
                    t.updateComponent();
                }
            } else {
                Toast.show({
                    duration: 1000,
                    content: '系统正在维护'
                });
            }
        })
            .catch((error) => {
                Toast.show({
                    type: 'error',
                    content: '系统正在维护'
                });
            })
    },
    onGetOrderList: function (pageNum, props, success, error) {
        let t = this;
        DB.Parent.get_order_list({
            schoolId: Storage.get('user.schoolId'),
            talkId: Storage.get('user.talkId'),
            pageIndex: pageNum
        })
            .then((content) => {
                if (content && content.code === '1') {
                    var list = [];
                    let data= content.data;
                    if (data && data.orderList.length > 0) {
                        list = data.orderList;
                    }
                    const hasNoMore = list.length < props.pageSize;                  
                    if (!content || !success) {
                        error();
                    } else {
                        success(hasNoMore, list);
                    }
                } else {
                    error();
                }
            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: '系统正在维护'
                });
            });
    },
    updateComponent: function() {
        this.trigger(this.data);
    }
});

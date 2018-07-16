
import { GetQueryString } from 'clientConfig/util/queryurlfield';
import { getDomRouter } from 'clientConfig/util/Page_router';
const DingClient = require('clientConfig/util/DingClient');
const Storage = require('clientConfig/util/StoreData').Storage;
const DB = require('app/db');
let start = Symbol('fnstart');
let monStorage = require('./StoreData').monStorage
import { Toast,Dialog } from 'saltui';

/**
 * 除了home界面,所有这个方法只需要鉴权
 */
class Appjudge {
    /*
     *signUrl:签名的url
     *corpid：授权企业id
     *appid：授权应用id
     *apptype:应用类型0微应用1服务窗应用
     *devtype:1手机2pc
    */
    static init() {
        var t = this;
        let url = location.href.split('#', 1);
        let signUrl = encodeURIComponent(url);
        DB.Auth.get_free_login({
            schoolId:Storage.get("user.schoolId"),
            url: url
        })
            .then((content) => {
                if (content && content.url == url) {
                    let corpid = content.corpId;
                    DingClient.clientConfig(content, function (isSuccessed, data) {
                        if (isSuccessed) {
                            //鉴权成功,跳转
                            let type = Storage.get("user.type");
                            if(0 == type){
                                getDomRouter(0);
                            }else if(1 == type){
                                getDomRouter(1);
                            }
                        } else {
                            Dialog.alert({
                                title: '提示',
                                content: "鉴权失败",
                                onConfirm() {
                                },
                            });
                            return;
                            console.log(JSON.stringify(data));
                        }
                    });
                } else {
                    console.log('签名的url不一致');
                }
            })
            .catch(function (error) {
                Toast.show({
                    type: 'error',
                    content: "系统正在维护"
                });
            });
    }
    
}

module.exports = Appjudge;
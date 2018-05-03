require('./app.styl');
import 'babel-polyfill'
import 'whatwg-fetch';
import {getDomRouter} from 'clientConfig/util/Page_router';
const Storage = require('clientConfig/util/StoreData').Storage;
const Appjudge = require('clientConfig/util/AppJudge');
if (!__LOCAL__) {
    getDomRouter(0);
} else {
    let type = Storage.get("user.type");
    if (0 == type) {
        getDomRouter(0);
    } else if (1 == type) {
        getDomRouter(1);
    } else {
        Appjudge.init();
    }
}
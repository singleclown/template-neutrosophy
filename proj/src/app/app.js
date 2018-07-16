require('./app.styl');
import 'babel-polyfill'
import 'whatwg-fetch';
import {getDomRouter} from 'clientConfig/util/Page_router';
const Appjudge = require('clientConfig/util/AppJudge');
const Storage = require('clientConfig/util/StoreData').Storage;
Storage.set('user.talkId', '9686')//智学号
Storage.set('user.parentId', '9774')
Storage.set('user.studentId', '25618')//25618，24900
Storage.set('user.classId', '3013')//3013，2819
Storage.set('user.name', 'xxx')
Storage.set('user.schoolId', 'f20171120')
Storage.set('user.type', 0)//0老师1家长
Storage.set('user.teacherId', '4732')
Storage.set('user.mobile', '')
if (__LOCAL__) {
    getDomRouter(0);
} else {
    Appjudge.init();
}
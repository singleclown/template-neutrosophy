require('./app.styl');
import 'babel-polyfill'
import 'whatwg-fetch';
import {getDomRouter} from 'clientConfig/util/Page_router';
if (__LOCAL__) {
    getDomRouter();
} 
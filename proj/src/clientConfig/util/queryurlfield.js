import { monStorage, Storage } from 'clientConfig/util/StoreData';

function getTime(time) {
    let date_obj = new Date(time);
    const sup = (n) => { return (n < 10) ? '0' + n : n; }
    return (sup(date_obj.getHours()) + ":" + sup(date_obj.getMinutes()));
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//兼容安卓的时间显示
function dealTime(time) {
    if (typeof time != 'number') { console.log('时间不对'); return; }
    if (navigator.userAgent.indexOf('iPhone') != -1) {
        // return new Date(time).toLocaleDateString() + " " + new Date(time).toTimeString().split(" ")[0];
        return new Date(time).toLocaleDateString() + " " + getTime(time);
    } else if (navigator.userAgent.indexOf('Android') != -1) {
        if (time) {
            let data = new Date(time).toJSON();
            data = data.substr(0, 10);
            let minute = getTime(time);
            data = data + " " + minute;
            return data.replace(/\-/g, '\.');
        }
    } else {
        return new Date(time).toLocaleDateString();
    }
}
const ready = (fn) => {
    dd.ready(fn)
}
export { GetQueryString, dealTime,ready }
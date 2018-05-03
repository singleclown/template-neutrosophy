import { Control } from 'react-keeper';
const classNames = require("classnames");

class App extends React.Component {
    constructor(props) {
        super(props);
        if (navigator.userAgent.indexOf('iPhone') != -1) {
            //钉钉容器中
            if (navigator.userAgent.includes("DingTalk")) {
                let arr = navigator.userAgent.match(/iPhone OS ([0-9]{1,2}_\d*){1}/);
                if (arr && arr.length > 0) {
                    let version = arr[1].replace(/\_/g, '.');
                    if (parseFloat(version) < 11.0) {
                        window.isIphone = true;
                    }
                }
            } else {
                //浏览器中
            }
        }
    }
    render() {
        return (
            <div className={classNames({ "ios-nav-bar-top": window.isIphone })}>
                {this.props.children}
            </div>
        );
    }
}
module.exports = App;
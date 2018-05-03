import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Control } from 'react-keeper';
import { Toast } from 'saltui';
import { monStorage, Storage } from 'clientConfig/util/StoreData';
const PageHome = require('pages/home');
const PageParentAward = require('pages/parentaward');
let APPContent = require('clientConfig/util/App');

export function getDomRouter(type = 0) {
    if (type == 1) {
        Control.go('/parentEvaluate');
    }
    //1.app的顶层路由
    const rootRoute = <HashRouter><div>
        <Route name="app" path="/" component={APPContent} >
            <PageHome.route />
            <PageParentAward.route />
        </Route>
    </div></HashRouter>
    ReactDOM.render(rootRoute, document.getElementById('App'));

}
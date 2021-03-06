import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-keeper';
const PageHome = require('pages/home');
let APPContent = require('clientConfig/util/App');
export function getDomRouter() {
    //1.app的顶层路由
    const rootRoute = <HashRouter><div>
        <Route name="app" path="/" component={APPContent} >
            <PageHome.route />
        </Route>
    </div></HashRouter>
    ReactDOM.render(rootRoute, document.getElementById('App'));

}
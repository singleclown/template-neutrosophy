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
        t.updateComponent();
        cb && cb(t.data);
    },

    updateComponent: function() {
        this.trigger(this.data);
    }
});

const Actions = require('./actions');
const DB = require('app/db.js');

module.exports = Reflux.createStore({
    listenables: [Actions],
    data: {
        loaded: false
    },

    onFetch: function(params, cb) {
        let t = this;
        t.data.loaded = true;
        t.updateComponent();
        cb && cb(t.data);
    },

    updateComponent: function() {
        this.trigger(this.data);
    }
});

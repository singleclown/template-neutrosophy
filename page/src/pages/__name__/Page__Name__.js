require('./Page<%- Name %>.styl');
<% if (store) { %>
const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');
import { Control } from 'react-keeper'
<% } %>
class <%- Name %> extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleOnLeftClick = this.handleOnLeftClick.bind(this);
    }
    handleOnLeftClick() {
        Control.go(-1)
    }
    render() {
        return (
            <div className="<%= name %>">
                page <%= name %>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}
<% if (store) { %>
reactMixin.onClass(<%- Name %>, Reflux.connect(Store));
<% } %>
module.exports = <%- Name %>;

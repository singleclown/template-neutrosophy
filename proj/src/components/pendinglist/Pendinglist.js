require('./Pendinglist.styl');
const Listitem = require('components/listitem');
const Myslide = require('components/myslide');
import classNames from 'classnames';
import {Toast, Button, ScrollList, Context} from 'saltui'
class Pendinglist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };  
    }
    render() {
        if (!this.props.leftSlip) {
            var RefreshItem = <Listitem {...this.props} refreshing={this.props.refreshing} />;
        } else {
            var RefreshItem = <Myslide {...this.props} refreshing={this.state.refreshing} />;
        }
        return (
            <div className={classNames('pendinglist')}>
                <div className={classNames("container", { "detail-height": this.props.norefresh })}>
                    {!this.props.norefresh ?
                        <ScrollList
                            dataGetted={this.props.dataGetted}
                            data={this.props.data}
                            hasError={this.props.hasError}
                            refreshing={this.props.refreshing}
                            onRefresh={this.props.onRefresh}
                            loading={this.props.loading}
                            onLoad={this.props.onLoad}
                            noMore={this.props.noMore}
                            desMaxLine={14}
                        >
                            {RefreshItem}
                        </ScrollList> :
                        (this.props.data && this.props.data.length > 0 && this.props.data.map((item, index) => {
                            return (
                                <Listitem
                                    {...this.props}
                                    select = {false}
                                    ref={`listItem${index}`}
                                    data={item}
                                    key={index}
                                />);
                        }))}
                </div>
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

module.exports = Pendinglist;

require('./Pendinglist.styl');
const Listitem = require('components/listitem');
import classNames from 'classnames';
import { ScrollList } from 'saltui'
class Pendinglist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleCancelReplay && this.props.handleCancelReplay();
    }
    render() {
        if (!this.props.leftSlip) {
            var RefreshItem = <Listitem
                {...this.props}
                refreshing={this.props.refreshing}
            />;
        }
        return (
            // <div className={classNames('pendinglist')}></div>
            <div className={classNames("pendinglist", { "detail-height": this.props.norefresh })} onClick={this.props.type != "news" && this.props.type != "card" && this.handleClick}>
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
                        scrollRefresh={!this.props.noscrollRefresh}
                    >
                        {RefreshItem}
                    </ScrollList> :
                    (this.props.data && this.props.data.length > 0 && this.props.data.map((item, index) => {
                        return (
                            <Listitem
                                {...this.props}
                                select={false}
                                ref={`listItem${index}`}
                                data={item}
                                key={index}
                            />);
                    }))}
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

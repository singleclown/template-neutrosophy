require('./Rollup.styl');
const classNames = require('classnames');
import { Boxs, Group, List } from 'saltui';
import AngleUp from 'salt-icon/lib/AngleUp';
const { HBox, Box, VBox } = Boxs;
class Rollup extends React.Component {

    constructor(props) {
        super(props);
        if (props.type == "class" && this.props.listdata instanceof Array && this.props.listdata.length > 0) {
            if(props.classId){
                for(let item of this.props.listdata){
                    if(item.classId==props.classId){
                        var title = item.title;
                        this.classId = item.classId;
                        break;
                    }
                }
                
            }
        } 
        this.state = {
            isUp: false,
            title: title
        };
        this.clickHead = this.clickHead.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    clickHead() {
        this.setState({ isUp: !this.state.isUp });
    }
    handleClick(event, dataItem) {
        let t = this;
        if (t.props.type == "class") {
            this.setState({ title: dataItem.title, isUp: !this.state.isUp })
            this.classId = dataItem.classId;
            t.props.refresh && t.props.refresh(dataItem.classId);
        } 
    }
    render() {
        let t = this;
        return (
            <div className="rollup">
                <HBox vAlign="center" onClick={this.clickHead} >
                    <Box flex={1} className="rollup-title t-ML10">
                        {t.state.title}
                    </Box>
                    <Box flex={1} className='t-FAR t-MR10'>
                        <AngleUp  className={classNames({"spinning":!this.state.isUp})} fill="#999" />
                    </Box>
                </HBox>
                {this.state.isUp && t.props.listdata instanceof Array && t.props.listdata.length > 0 ?
                    <List
                        layout=""
                        className="rollup-list-item"
                        hasRightIcon={false}
                        isDelete={false}
                        demoTitle=""
                        onClick={this.handleClick}
                        data={t.props.listdata}
                    /> : null}
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.listdata instanceof Array && nextProps.listdata.length > 0) {
        //     this.setState({ title: nextProps.listdata[0].title });
        // }
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

module.exports = Rollup;

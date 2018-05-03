require('./Listitem.styl');
import { Boxs } from 'saltui'
import Icon from 'salt-icon'
import { Control } from 'react-keeper'
const { HBox, Box, VBox } = Boxs;
class Listitem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if (this.props.refreshing) return;
        let { schoolId, awardId } = this.props.data;
        Control.go('/home/awarddetail', { data: { schoolId, awardId } })
    }
    render() {
        return (
            <div className="teacher-listitem" onClick={this.handleClick}>
                <VBox className="teacher-listitem-box">
                    <HBox vAlign="center">
                        <Box flex={1} className="teacher-listitem-title">
                            {this.props.title}
                        </Box>
                        <Box flex={1} className="t-FAR teacher-listitem-date">
                            {this.props.subtitle}
                        </Box>
                    </HBox>
                    {this.props.studentName &&
                        <HBox className="teacher-listitem-content t-MT10">
                            <Box>学生：{this.props.studentName}</Box>
                        </HBox>
                    }
                    <HBox className="omt t-MT15 teacher-listitem-content">
                        <Box>{this.props.msg}</Box>
                    </HBox>
                </VBox>
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

module.exports = Listitem;

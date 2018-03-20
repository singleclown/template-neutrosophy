require('./Rollup.styl');
const classNames = require('classnames');
import { Boxs, Scroller } from 'saltui'
import Icon from 'salt-icon';
const { HBox, Box } = Boxs;
class Rollup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUp: false,
            top_select: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.clickIcon = this.clickIcon.bind(this);
    }
    //列表项icon点击
    clickIcon(e) {
        e.stopPropagation()
        this.setState({ top_select: !this.state.top_select }, () => {
            for (let key in this.props.data.content) {
                let id = [`active${key}`];
                let values = (eval(`this.state.${id}`));
                if (this.state.top_select != values) {
                    this.setState({ [`active${key}`]: this.state.top_select })
                }
            }
        })
    }
    //点击列表项
    handleClick() {
        this.setState({ isUp: !this.state.isUp })
    }
    //点击列表项子项
    handleClickIcon(index) {
        let id = [`active${index}`];
        let values = (eval(`!this.state.${id}`));
        this.setState({ [`active${index}`]: values }, () => {
            if (values) {
                for (let key in this.props.data.content) {
                    let id = [`active${key}`];
                    let item = (eval(`this.state.${id}`));
                    if (!item) { break; }
                    if (item && key == this.props.data.content.length - 1) {
                        this.setState({ top_select: true })
                    }
                }
            } else {
                if (this.state.top_select) {
                    this.setState({ top_select: false })
                }
            }
        })
    }
    render() {
        let t = this;
        return (
            <div className="rollup" >
                <HBox vAlign="center" onClick={this.handleClick}>
                    <Box ><span className={classNames({ "right-triangle": !t.state.isUp, "top-triangle": t.state.isUp })}></span></Box>
                    <Box flex={3} className="t-ML17">{t.props.data.title}<span className="t-ML5">({t.props.data.content.length})</span></Box>
                    <Box flex={1} className="t-FAC"><Icon name="check-round" fill={this.state.top_select ? "#53CAC3" : "#E5E5E5"} width={15} height={15} onClick={this.clickIcon} /></Box>
                </HBox>
                {t.state.isUp && (t.props.data.content instanceof Array ? t.props.data.content.map((item, index) => {
                    return (
                        <div className="rollitem">
                            <HBox vAlign="center" className="t-PL30">
                                <Box flex={3}>
                                    {item}
                                </Box>
                                <Box flex={1} className="t-FAC">
                                    <Icon
                                        name="check-round"
                                        fill={(eval(`t.state.active${index}`)) ? "#53CAC3" : "#E5E5E5"}
                                        width={15}
                                        height={15}
                                        onClick={this.handleClickIcon.bind(t, index)}
                                    />
                                </Box>
                            </HBox>
                        </div>
                    );
                })
                    :
                    null)
                }
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
Rollup.defaultProps = {
    content: []
};
module.exports = Rollup;

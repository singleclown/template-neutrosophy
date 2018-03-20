require('./PageHome.styl');
import { Control } from 'react-keeper';
import { Boxs} from 'saltui';
const { HBox, Box, VBox } = Boxs;
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        let t = this;
        return (
            <div className="home">
                <VBox className="banner-bac" vAlign="center">
                    <Box className="t-FAC">欢迎</Box>
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
module.exports = Home;

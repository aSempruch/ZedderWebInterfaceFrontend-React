import React, {Component} from 'react';
import DataCard from './DataCard';
import BarChart from './BarChart';
import fetcher from '../../util/fetcher';
import moment from 'moment';

class MainView extends Component {

    state = {
        topMonth: false
    };

    componentWillReceiveProps(nextProps) {
        // Don't run if same props are passed
        if(nextProps.date == this.props.date)
            return;
        const { start, end } = nextProps.date;
        this.loadTables(start, end);
    }

    componentDidMount() {
        const { start, end } = this.props.date;
        this.loadTables(start, end);
    }

    loadTables(start, end) {
        loadTopRange.bind(this)(start, end);
    }

    render() {
        const { start, end } = this.props.date;
        return (
            <div>
                {this.state.topMonth &&
                (<DataCard content={<BarChart data={normalizeTopData(this.state.topMonth)}/>} title={`Top coverages ${moment(start).format('MM/DD/YY')} - ${moment(end).format('MM/DD/YY')}`}/>)
                }
            </div>
        );
    }
}

function loadTopRange(start, end) {
    fetcher.getTop(moment(start).format('YYYY-MM-DD'), moment(end).format('YYYY-MM-DD'),
        (res, err) => {
            if(err)
                return console.log('Unable to retrieve top data');
            this.setState({topMonth: res});
        })
}

function normalizeTopData(data) {
    if(!data)
        return undefined;
    var result = [];
    data.map((item) => {
        result.unshift({x: item.count, y: item.covered})
    });
    return result
}

export default MainView;
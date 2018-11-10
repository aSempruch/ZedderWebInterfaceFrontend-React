import React, {Component} from 'react';
import { getRange } from '../../util/fetcher';
import { dateToString } from '../../util';
import moment from 'moment';
import DataCard from "./DataCard";
import BarChart from "./BarChart";

class SearchView extends Component {

    state = {
        result: false
    };

    componentDidMount() {
        const { start, end } = this.props.date;
        const { query } = this.props;
        this.loadTables(start, end, query.split(','));
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.date == this.props.date)
            return;
        const { start, end } = nextProps.date;
        const { query } = this.props;
        this.loadTables(start, end, query.split(','));
    }

    loadTables(start, end, netids) {
        loadRange.bind(this)(start, end, netids);
    }

    render() {
        const { query } = this.props;
        const { start, end } = this.props.date;
        return (
            <div>
                {this.state.result &&
                (<DataCard
                    content={<BarChart data={normalizeRangeDataBySite(this.state.result)}/>}
                    title={`Coverages by Site ${dateToString(start, end)}`}
                />)
                }
            </div>
        );
    }
}

function loadRange(start, end, netids) {
    getRange(moment(start).format('YYYY-MM-DD'), moment(end).format('YYYY-MM-DD'), netids,
        (json, err) => {
            if(err) return console.log('Unable to retrieve ranged data');
            this.setState({result: json});
        });
}

function normalizeRangeDataBySite(data) {
    // TODO: Remove hardcoded sites
    var siteCount = {
        'Alex Graduate': 0,
        'Alex Undergrad': 0,
        'CACC': 0,
        'RSC': 0,
        'RUAB': 0,
        'RUAB-Dispatch': 0
    };
    if(!data)
        return undefined;
    data.map((item) => {
        siteCount[item.site]++;
    });
    var result = [];
    Object.keys(siteCount).forEach((key) => {
        result.unshift({x: siteCount[key], y: key})
    });

    return result
}

export default SearchView;
import React, {Component} from 'react';
import { XYPlot, HorizontalBarSeries, VerticalGridLines, YAxis, XAxis } from 'react-vis';
import 'react-vis/dist/style.css';

class BarChart extends Component {
    render() {
        const { data } = this.props;
        const tickVals = getGridTicks(data);
        return (
            <XYPlot
                width={750}
                height={500}
                yType='ordinal'
                stackBy='x'
                margin={{left: 90}}
            >
                <VerticalGridLines tickValues={tickVals}/>
                <XAxis tickValues={tickVals}/>
                <YAxis />
                <HorizontalBarSeries
                    data={data}
                />
            </XYPlot>
        );
    }
}

function getGridTicks(data) {
    var result = [];
    data.map((item) => {
        result.push(item.x);
    })
    return result;
}

export default BarChart;
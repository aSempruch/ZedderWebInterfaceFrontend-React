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
                height={100 + data.length*40}
                yType='ordinal'
                stackBy='x'
                margin={{left: getMarginShift(data)}}
            >
                <VerticalGridLines tickValues={tickVals} animation/>
                <XAxis tickValues={tickVals} animation title="Coverages"/>
                <YAxis style={{
                    text: {fontSize: '15'}
                }}/>
                <HorizontalBarSeries
                    animation
                    data={data}
                    color='#26a69a'
                />
            </XYPlot>
        );
    }
}

function getGridTicks(data) {
    var result = [];
    data.map((item) => {
        result.push(item.x);
    });
    return result;
}

function getMarginShift(data) {
    var longest = 0;
    data.map((item) => {
        if(item.y.length > longest)
            longest = item.y.length;
    })
    return longest*12;
}

export default BarChart;
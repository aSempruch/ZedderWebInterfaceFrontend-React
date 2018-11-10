import React, {Component} from 'react';
import { DateRange } from 'react-date-range';
import {Button, Typography, Popover, Menu, withStyles } from '@material-ui/core';
import moment from 'moment';

var styles = theme => ({
});

class DatesField extends Component {

    state = {
        anchorEl: null
    }

    handleClick = (e) => {
        this.setState({
            anchorEl: e.target
        })
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    };

    render() {
        const { anchorEl } = this.state;
        const { start, end } = this.props.date;
        return (
            <div>
                <Button variant='contained' onClick={this.handleClick}>
                    <Typography variant='title'>
                        {moment(start).format('ll')} - {moment(end).format('ll')}
                    </Typography>
                </Button>
                <Popover
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    anchorEl={anchorEl}
                    transitionDuration={225}
                    transformOrigin={{
                        vertical: -40,
                        horizontal: 0
                    }}
                >
                    <DateRange
                        startDate={start}
                        endDate={end}
                        calendars={2}
                        onChange={this.props.setDate}
                    />
                </Popover>
            </div>
        );
    }
}

export default withStyles(styles)(DatesField);
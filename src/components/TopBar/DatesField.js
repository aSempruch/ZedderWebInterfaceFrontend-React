import React, {Component} from 'react';
import { DateRange } from 'react-date-range';
import {Button, Typography, Popover, Menu, withStyles } from '@material-ui/core';
import { CalendarTodayTwoTone } from '@material-ui/icons';
import moment from 'moment';

var styles = theme => ({
    Popover: {
    },
    CalIcon: {
        paddingRight: '10px'
    },
    DateButton: {
        overrides: {
            color: 'white'
        }
    },
    overrides: {
        MuiButton: {
            containedSecondary: {
                color: 'white',
            }
        }
    },
    containedSecondary: {
        color: 'white'
    }
});
const ranges = {
    Today: {
        startDate: moment(),
        endDate: moment(),
        key: 'Today'
    },
    Week: {
        startDate: moment().startOf('week'),
        endDate: moment(),
        key: 'This Week'
    },
    Month: {
        startDate: moment().startOf('month'),
        endDate: moment(),
        key: 'This Month'
    },
    AllTime: {
        startDate: moment('09-10-2018'),
        endDate: moment(),
        key: 'All Time'
    },
    Last_7_Days: {
        startDate: moment().subtract(7, 'days'),
        endDate: moment(),
        key: 'Last 7 Days'
    },
    Last_30_Days: {
        startDate: moment().subtract(30, 'days'),
        endDate: moment(),
        key: 'Last 30 Days'
    },

}

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
        const { classes } = this.props;
        return (
            <div>
                <Button variant='extendedFab' color='secondary' onClick={this.handleClick}>
                    <CalendarTodayTwoTone className={classes.CalIcon}/>
                    <Typography variant='body1' color="inherit">
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
                    className={classes.Popover}
                >
                    <DateRange
                        startDate={start}
                        endDate={end}
                        calendars={2}
                        onChange={(date) => {this.props.setDate(date); this.handleClose()}}
                        twoStepChange={true}
                        maxDate={moment()}
                        minDate={moment('09-10-2018')}
                        rangedCalendars={true}
                        ranges={ranges}
                    />
                </Popover>
            </div>
        );
    }
}

export default withStyles(styles)(DatesField);
function dateToString(start, end) {
    var moment = require('moment');
    var prefix = '', p1 = '', divider = '', p2 = '';
    // This Month
    if(moment(start).diff(moment().startOf('month'), 'days') === 0 && moment(end).diff(moment(), 'days') === 0)
        return `of ${moment().format('MMMM')}`;
    // This Week
    if(moment(start).diff(moment().startOf('week'), 'days') === 0 && moment(end).diff(moment(), 'days') === 0)
        return 'this Week';
    // Today
    if(moment(start).diff(moment(), 'days') === 0 && moment(end).diff(moment(), 'days') === 0)
        return 'Today';
    return `${moment(start).format('MM/DD/YY')} - ${moment(end).format('MM/DD/YY')}`;
}

module.exports = {
    dateToString: dateToString
}
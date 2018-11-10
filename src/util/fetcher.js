
function getTop(start, end, cb) {
    // TODO: Change this domain
    fetch(`http://192.168.1.8:4000/shifts/top?start=${start}&end=${end}`)
        .then(res => res.json())
        .then(res => cb(res, false))
        .catch(err => cb(null, true))
}

function _paramList(value, items) {
    var result = '';
    items.map((item) => result += `&${value}=${item.replace(/\s/g,'')}`);
    return result;
}

function getRange(start, end, netids, cb) {
    // TODO: Change domain, remove hardcoded sites
    var sites = _paramList("site", ['RUAB', 'CACC', 'Alex+Undergrad', 'RSC', 'Alex+Graduate', 'RUAB-Dispatch']);
    var netidString = _paramList("netid", netids);
    fetch(`http://192.168.1.8:4000/shifts/range?start=${start}&end=${end}${sites}${netidString}`)
        .then(res => res.json())
        .then(res => cb(res, false))
        .catch(err => cb(null, false));
}

module.exports = {
    getTop: getTop,
    getRange: getRange
}
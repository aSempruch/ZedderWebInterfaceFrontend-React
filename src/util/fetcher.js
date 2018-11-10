
function getTop(start, end, cb) {
    // TODO: Change this domain
    fetch(`http://localhost:4000/shifts/top?start=${start}&end=${end}`)
        .then(res => res.json())
        .then(res => cb(res, false))
        .catch(err => cb(null, true))
}

module.exports = {
    getTop: getTop
}
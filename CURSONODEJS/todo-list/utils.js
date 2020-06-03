const fs = require('fs');

const logItem = (item) => {
    return fs.appendFileSync('log.txt',`${new Date()}: ${item}\n`);
}

module.exports = logItem;
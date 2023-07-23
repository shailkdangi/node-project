const path = require('path');
const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs').promises;

const logEvent = async (message) => {
    const datetime = format(new Date(), 'yyyy-MM-dd\tHH:mm:ss');
    const log = '${datetime}\t${message}';
    try {
        await fs.appendFile(path.join(__dirname, 'files', 'log.txt'), `${message}\n`);
    } catch (err) {
        throw err;
    }
};

const Logger = (req, res, next) => {
    logEvent(`${req.method}\t${req.url}`)
    next();
};
module.exports = { Logger, logEvent }
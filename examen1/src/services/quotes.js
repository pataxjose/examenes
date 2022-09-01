const db = require('../services/db');
const config = require('../config');

function getMultiple(page = 1) {
    const offset = (page - 1) * config.listPerPage;
    const data = db.query(`SELECT * FROM producto LIMIT ?,?`, [offset, config.listPerPage]);
    const meta = { page };

    return {
        data,
        meta
    }
}

function create(quoteObj) {
    //validateCreate(quoteObj);
    const { title, stage } = quoteObj;
    const result = db.run('INSERT INTO producto (title, stage) VALUES (@title, @stage)', { quote, author });

    let message = 'Error in creating quote';
    if (result.changes) {
        message = 'Quote created successfully';
    }

    return { message };
}
module.exports = {
    getMultiple
}
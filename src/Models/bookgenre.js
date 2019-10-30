const db = require ('../Configs/db');

module.exports = {
    getByGenre: genrecheck => {
        return new Promise ((resolve, reject) => {
            db.query(
                `SELECT * FROM bookcollection where genre =? ORDER by title ASC`,
                [genrecheck],
                (err, response) => {
                    if (!err) {
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });
    }

};
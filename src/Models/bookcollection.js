const db = require ('../Configs/db');

module.exports = {
    getByStatus: statuscheck => {
        return new Promise ((resolve,reject) => {
            db.query(
                `SELECT * FROM bookcollection where genre = ? ORDER by title ASC`,
                [statuscheck],
                (err,response) => {
                    if (!err){
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });

    },
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
    },
    searchByGenre: statuscheck => {
        return new Promise ((resolve,reject) => {
            db.query(
                `SELECT * FROM bookcollection WHERE genre REGEXP CONCAT ('\', ?,'\') `,
                [statuscheck],
                (err,response) => {
                    if (!err){
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });
    
    },
    
};
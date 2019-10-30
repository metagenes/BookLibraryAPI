const db = require ('../Configs/db');

module.exports = {
    getAll: () => {
        return new Promise ((resolve, reject) => {
            db.query(
                `SELECT * FROM bookcollection order by title ASC`,
               
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
    post: body => {
        return new Promise ((resolve, reject) => {
          db.query ('INSERT INTO bookcollection SET ?', [body], (err, response) => {
            if (!err) {
              resolve (response);
            } else {
              reject (err);
            }
          });
        });
      },
      deleteByID: deletecheck => {
        return new Promise ((resolve, reject) => {
            db.query(
                `DELETE FROM bookcollection where id =?`,
                [deletecheck],
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
    putByID: (body,id) => {
      return new Promise ((resolve, reject) => {
          db.query(
              `UPDATE bookcollection SET ? where id =?`,
              [body,id],
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


};
const db = require ('../Configs/db');

module.exports = {
    // getAll: () => {
    //     return new Promise ((resolve, reject) => {
    //         db.query(
    //             `SELECT * FROM bookcollection order by title ASC`,
               
    //             (err, response) => {
    //                 if (!err) {
    //                     resolve (response);
    //                 } else {
    //                     reject (err);
    //                 }
    //             }
    //         );
    //     });
    // },
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
                `DELETE FROM bookcollection where book_id =?`,
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
              `UPDATE bookcollection SET ? where book_id =?`,
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
  orderBook: (dataOrder) => {
    return new Promise ((resolve, reject) => {
        db.query(
            `INSERT into transaction SET ?`,
            [dataOrder],
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
returnBook: (dataReturn,book_id,user_id) => {
    return new Promise ((resolve, reject) => {
        db.query(
            `UPDATE transaction SET ? where book_id = ? AND user_id=?`,
            [dataReturn,book_id,user_id],
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
searchBook: statuscheck => {
    return new Promise ((resolve,reject) => {
        db.query(
            `SELECT * FROM bookcollection WHERE title REGEXP CONCAT ('\', ?,'\') `,
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
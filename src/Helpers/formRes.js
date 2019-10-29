module.exports = {
    getByStatus:(res, response, status) => {
        const form = {
            status,
            response,
        };
        res.json (form);
    },
    getByGenre:(res, response, status) => {
        const form = {
            status,
            response,
        };
        res.json(form);
    },
    getAll:(res, response, status) => {
        const form = {
            status,
            response,
        };
        res.json(form);
    },
     delete:(res,response,status) =>{
         const form = {
             status,
             response,
         };
         res.json(form);
     },
     post:(res,response,status) =>{
        const form = {
            status,
            response,
        };
        res.json(form);
    },
    put:(res,response,status) =>{
        const form = {
            status,
            response,
        };
        res.json(form);
    },
};

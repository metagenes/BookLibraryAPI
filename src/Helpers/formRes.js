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
    // getAll:(res, response, status) => {
    //     const form = {
    //         status,
    //         message:"book list",
    //         response,
    //     };
    //     res.json(form);
    // },
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
    getWishlist:(res,response,status) =>{
        const form = {
            status,
            message:"wishlist list",
            response,
        };
        res.json(form);
    },
    getHistory:(res,response,status) =>{
        const form = {
            status,
            message:"history list",
            response,
        };
        res.json(form);
    },
    orderBook:(res,response,status) =>{
        const form = {
            status,
            message:"book borrowed",
            response,
        };
        res.json(form);
    },
    returnBook:(res,response,status) =>{
        const form = {
            status,
            message:"book returned",
            response,
        };
        res.json(form);
    },
    postWishlist:(res,response,status) =>{
        const form = {
            status,
            message:"wishlist added",
            response,
        };
        res.json(form);
    },
    searchBook:(res,response,status) =>{
        const form = {
            status,
            message:"wishlist added",
            response,
        };
        res.json(form);
    },
    searchByGenre:(res,response,status) =>{
        const form = {
            status,
            message:"wishlist added",
            response,
        };
        res.json(form);
    },
};

const {
    addBookHandler,
    getAllBookHandler
} = require("./handler");


const routes = [{

        method: 'POST',
        path: '/books',
        handler: addBookHandler
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler
    },
    // {
    //     method: 'GET',
    //     path: '/books/{bookId}',
    //     handler: //tampil buku khusus dari Id,
    // },
    // {
    //     method: 'PUT',
    //     path: '/books/{bookId}',
    //     handlerer: //,
    // },
    // {
    //     method: 'DELETE',
    //     path: '/books/{bookId}',
    //     handler: //,
    // },

];

module.exports = routes;
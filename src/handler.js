const {
    nanoid
} = require("nanoid");
const books = require('./books');

const addBookHandler = (request, h) => {
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading
    } = request.payload;

    const id = nanoid(16);
    const finished = pageCount === readPage;
    const insertAt = new Date().toISOString();
    const updateAt = insertAt;

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertAt,
        updateAt
    };

    if (!(kosong = newBook.name || '')) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',

        });
        response.code(400);
        return response;

    } else if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari ',

        });
        response.code(400);
        return response;
    }


    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id
            }
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'error',
        message: 'Buku gagal ditambahkan'
    });
    response.code(500);
    return response;
};

const getAllBookHandler = () => ({
    status: 'success',
    data: {
        books: books.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher
        }))
    }
});

const getBookByIdHandler = (request, h) => {
    //
}

module.exports = {
    addBookHandler,
    getAllBookHandler,
    getBookByIdHandler
};
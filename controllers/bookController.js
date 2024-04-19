const Book = require("../modal/booksSchema");


const bookController = {
    getAllBooks: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).send(books);
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    },

    getBookById: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) {
                return res.status(404).send({ error: 'Book not found' });
            }
            res.status(200).send(book);
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    },

    addBook: async (req, res) => {
        try {
            const date = new Date();
            const newBook = await Book.create({
                ...req.body,
                createdAt: date,
                updatedAt: date,
            });
            res.status(201).send(newBook);
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    },

    updateBook: async (req, res) => {
        try {
            const date = new Date();
            const updatedBook = await Book.findByIdAndUpdate(req.params.id, {...req.body, createdAt: date, updatedAt: date,}, { new: true });
            if (!updatedBook) {
                return res.status(404).send({ error: 'Book not found' });
            }
            res.status(200).send(updatedBook);
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    },

    deleteBook: async (req, res) => {
        try {
            const deletedBook = await Book.findByIdAndDelete(req.params.id);
            if (!deletedBook) {
                return res.status(404).send({ error: 'Book not found' });
            }
            res.status(204).send();
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
};

module.exports = bookController;

const { model, SchemaTypes, Schema } = require("mongoose");

const bookSchema = new Schema({
    title: {
        type: SchemaTypes.String,
        required: true
    },
    author: {
        type: SchemaTypes.String,
        required: true
    },
    genre: {
        type: SchemaTypes.String,
        required: true
    },
    publicationYear: {
        type: SchemaTypes.Number,
        required: true
    },
    createdAt: {
        type: SchemaTypes.String,
        require: true
    },
    updatedAt: {
        type: SchemaTypes.String,
        require: true
    },
});

const Books = model('books', bookSchema);

module.exports = Books;

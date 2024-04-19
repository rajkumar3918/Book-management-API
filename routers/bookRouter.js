const {Router} = require('express');
const bookController = require('../controllers/bookController');
const auth = require('../middelware/auth');


const bookRouter = new Router();

bookRouter.get('/', auth, bookController.getAllBooks);
bookRouter.get('/getBook:id',auth, bookController.getBookById);
bookRouter.post('/addBook',auth, bookController.addBook);
bookRouter.put('/updateBook:id',auth, bookController.updateBook);
bookRouter.delete('/deleteBook:id',auth, bookController.deleteBook);


module.exports = bookRouter;

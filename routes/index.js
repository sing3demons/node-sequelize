var express = require('express');
var router = express.Router();
const Book = require('../models/book')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product', async(req, res, next) => {
  const book = await Book.findAll()
  res.render('product', {data: {}, products: book})
})

router.get('/productEdit/:id', async(req, res) => {
  const {id} = req.params;
  const book = await Book.findByPk(id)
  const books = await Book.findAll()

  return res.render('product', { data: book, products:books});
})

router.post('/productEdit/:id', async(req, res) => {
  const {id} = req.params;
  const book = await Book.update(req.body, {where: {id}})
  return res.redirect('/product');
})

router.post('/product', async(req, res, next) => {
  console.log(req.body);
  const book = await Book.create({
    barcode: req.body.barcode,
    name: req.body.name
  })
  console.log(book);
  res.redirect('/product')
})

router.get('/productDelete/:id', async(req, res, next) => {
  const id = [req.params.id];
  const book = await Book.destroy({where:{id}})
  res.redirect('/product')
})

module.exports = router;

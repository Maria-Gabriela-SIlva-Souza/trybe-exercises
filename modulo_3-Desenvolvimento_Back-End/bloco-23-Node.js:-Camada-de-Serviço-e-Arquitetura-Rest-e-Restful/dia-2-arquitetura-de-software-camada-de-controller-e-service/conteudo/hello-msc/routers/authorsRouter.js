const router = require('express').Router();

const AuthorS = require('../services/AuthorsS');
const { isValidCreateAuthor } = require('../middlewares/validations')


router.get('/', async (_req, res) => {
  const authors = await AuthorS.getAll();

  res.status(200).json(authors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const author = await AuthorS.findById(id);
  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

router.post('/', isValidCreateAuthor, async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await AuthorS.createAuthor(first_name, middle_name, last_name);

  res.status(201).json(author);
});

module.exports = router;
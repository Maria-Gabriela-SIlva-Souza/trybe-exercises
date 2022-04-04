const isValidCreateAuthor = ((req, res, next) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!first_name || typeof first_name !== 'string') return res.status(400).json({ message: 'First Name inválido' });
  if (!last_name || typeof last_name !== 'string') return res.status(400).json({ message: 'Last Name inválido' });
  if (middle_name && typeof middle_name !== 'string') return res.status(400).json({ message: 'Middle Name inválido' });

  next();
});

const isValidFindById = ((author) => {

  if (!author) return res.status(404).json({ message: 'Not found' });

});

module.exports = {
  isValidCreateAuthor,
  isValidFindById
}

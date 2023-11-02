const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try
  {
    if (req.body instanceof Array)
    {
      const tags = await Category.bulkCreate(req.body);
      res.json(tags);
    }
    else
    {
      const tag = await Category.create(req.body);
      res.json(tag);
    }
  }
  catch (error)
  {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try
  {
    const tag = await Category.update({category_name: req.body.category_name}, {where: {id: req.params.id}});
    res.json(tag);
  }
  catch (error)
  {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try
  {
    const numOfDeleted = await Category.destroy({where: { id: parseInt(req.params.id) }});
    res.json(numOfDeleted);
  }
  catch (error)
  {
    res.status(500).json(error);
  }
});

module.exports = router;

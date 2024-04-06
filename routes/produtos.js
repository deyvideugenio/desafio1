const express = require('express');
const router = express.Router();

const produtoControllers = require('../controllers/produtoControllers');

/* GET produtos listing. */
router.get('/', produtoControllers.findAll);
/* PUT produtos listing. */
router.put('/', produtoControllers.update);
/* POST produtos listing. */
router.post('/', produtoControllers.save);
/* DELETE produtos listing. */
router.delete('/:id', produtoControllers.remove);

module.exports = router;

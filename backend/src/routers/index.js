const express = require('express');
const boardsRouter = require('../controllers/boardController');
const router = express.Router();

router.get('/boards/', boardsRouter.getBoards);
router.post('/board/', boardsRouter.createBoard);

module.exports = router;

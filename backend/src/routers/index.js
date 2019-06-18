const express = require('express');
const boardsRouter = require('../controllers/boardController');
const cardsRouter = require('../controllers/cardController');
const router = express.Router();

function errorHanlder(func) {
  return (req, res) => {
    try {
      func(req, res);
    } catch (err) {
      Error(err);
    }
  };
}

router.get('/boards/', errorHanlder(boardsRouter.getBoards));
router.get('/board', errorHanlder(boardsRouter.getBoard));
router.post('/board/', errorHanlder(boardsRouter.createBoard));

router.post('/card/', errorHanlder(cardsRouter.createCard));

module.exports = router;

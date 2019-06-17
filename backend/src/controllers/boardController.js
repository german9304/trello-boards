const { prisma } = require('../generated');

/**
 * returns boards list
 */
exports.getBoards = async (req, res) => {
  const boards = await prisma.boards();
  console.log(boards);
  res.json(boards);
};

exports.createBoard = async (req, res) => {
  const { title } = req.body;
  const createdBoard = await prisma.createBoard({
    title,
  });
  res.json({ board: createdBoard });
};

const { prisma } = require('../generated');

/**
 * returns boards list
 */
exports.getBoards = async (req, res) => {
  const fragment = `
    fragment BoardsWithCards on Board {
      id
      title
      cards {
        id
        name
      }
    }
  `;
  const boards = await prisma.boards().$fragment(fragment);
  res.json(boards);
};

exports.getBoard = async (req, res) => {
  const { id } = req.body;
  const board = await prisma.board({ id });
  res.json({ board });
};
/**
 * Creates a board
 */
exports.createBoard = async (req, res) => {
  const { title } = req.body;
  const createdBoard = await prisma.createBoard({
    title,
  });
  res.json({ board: createdBoard });
};

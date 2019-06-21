const { prisma } = require('../generated');

/**
 * creates a card
 */
exports.createCard = async (req, res) => {
  const { name, boardID } = req.body;
  const card = await prisma.createCard({
    name,
    board: {
      connect: {
        id: boardID,
      },
    },
  });
  res.json({ card });
};

exports.editCard = async (req, res) => {};

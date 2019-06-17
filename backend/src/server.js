const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ data: 'Hello from api' });
});

app.listen(PORT, () => console.log(`App listetning on port ${PORT}`));

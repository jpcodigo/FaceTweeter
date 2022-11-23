const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routes
const postRoutes = require('./routes/Posts');
app.use('/posts', postRoutes);

db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log('Server online');
  });
});


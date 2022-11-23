const express = require('express');
const app = express();

app.use(express.json());

const db = require('./models');

// Routes
const postRoutes = require('./routes/Posts');
app.use('/posts', postRoutes);

db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log('Server online');
  });
});


const express = require('express');
const app = express();
var route = require('./api/routes/reportRoute');

app.get('/', (req, res) => {
  res.send('HEY!')
});
app.listen(3000, () => console.log('Server running on port 3000'));


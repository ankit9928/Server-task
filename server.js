const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

const fs = require('fs')
const path = require('path')

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags : 'a'})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :date[web]', {stream: accessLogStream}))


app.use(bodyParser.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

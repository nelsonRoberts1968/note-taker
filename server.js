const express = require('express');
const app = express();

//ste erver on Port 3001
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));


//passing port 3001 variable
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
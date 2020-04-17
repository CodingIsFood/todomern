const express = require('express')
const mongoose = require('mongoose')

const items = require('./routes/api/items')

const app = express();

app.use(express.json);

//Connecting to Mongo
const db=require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log('Mongo is Connected...'))
    .catch(err => console.log(err))

app.use('/api/items', items);

//port for server to run
const port=process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));


const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const db = require('./models');

const PORT =  process.env.PORT || 3001; 

const userRouter = require('./routes/userRouter');

app.use('/users', userRouter);

app.use(express.json());
app.use(cors());               
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,'/client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

db.sequelize.sync().then(req => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))); 

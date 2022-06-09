const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const db = require('./models');

const PORT =  process.env.PORT || 3001; 

const userRouter = require('./routes/userRouter');
const deviceRouter = require('./routes/deviceRouter');
const typeRouter = require('./routes/typeRouter');
const brandRouter = require('./routes/brandRouter');
const basketRouter = require('./routes/basketRouter');
const basketItemRouter = require('./routes/basketItemRouter');


app.use(express.json());
app.use(cors());               
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({}));

app.use('/users', userRouter);
app.use('/device', deviceRouter);
app.use('/type', typeRouter);
app.use('/brand', brandRouter);
app.use('/basket', basketRouter);
app.use('/basketItem', basketItemRouter);


app.use(express.static(path.join(__dirname,'/client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

db.sequelize.sync().then(req => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))); 

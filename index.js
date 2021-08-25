const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT =  process.env.PORT || 3001; 

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname,'/client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

console.log(path.join(__dirname, 'client', 'build', 'index.html'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 

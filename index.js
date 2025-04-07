const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



app.get('/', (req, res) =>{
    res.send('simple crud server is runningifgdf')
})

app.listen(port, ()=>{
    console.log(`simple crud server is running on port ${port}`);
})



















// const express = require('express')
// const cors = require('cors')
// const app = express()
// const port = process.env.PORT || 5000



// app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) =>{
//     res.send('simple crud server is running')
// })

// app.listen(port, ()=>{
//     console.log(`simple crud server is running on port ${port}`);
// })

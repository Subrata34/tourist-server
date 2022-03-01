const express = require('express')
const app = express()
const  cors=require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const { MongoClient, ConnectionCheckedInEvent } = require('mongodb');


const port = process.env.PORT ||5000;


//midle wire
app.use(express.json());
app.use(cors());
app.use(fileUpload());

//mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g4aj0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(uri);

async function run(){
    try{
        await client.connect();
        const database=client.db('buyer');
        const buyerCollection=database.collection('user');

        // app.post('/user',async(req,res)=>{
            
        // })
    }
    finally{

    }

}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` listening on port ${port}`)
})
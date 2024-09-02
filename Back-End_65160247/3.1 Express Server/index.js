import express from "express"
const server = express();
// port
const port=3000;

//server run on port 3000 and callback
server.listen(port,() =>{
    console.log(`Server running on port ${port}.`); // callback
})





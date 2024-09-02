import express from "express"
const server = express();
const port = 3000;

//get = request resource
//post = sending resource
//put = update replace all resource
//patch = update patch up a resource
//delete = delete resource

server.get('/',(req,res) =>{
    res.send('<h2> Piyawat </h2>')
    // console.log(req.rawHeaders); ชื่อเรา เบอร์โทร อาหารที่ชอบ
})

server.get('/About',(req,res) => {
    res.send('<h1> ก๋วยเตี๋ยว </h1>')
})

server.get('/Contact',(req,res) => {
    res.send('<h1> 0937545934 </h1>')
})

server.listen(port,()=>{
    console.log(`Server running on Port ${port}`);
})



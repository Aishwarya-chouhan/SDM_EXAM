const  express=require('express');
const config=require('config');
const empRelatedRoute=require('./Router/emps');

const app=express();
app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods',"*");
    next();
})

app.use(express.json());
app.use('/emps',empRelatedRoute);

var portno=config.get("PORT");

app.listen(portno,()=>{
    console.log("server is listening" + portno);

})
const express=require('express');
const appforEmp=express.Router();
const config=require('config');
const mysql=require('mysql');
var connection=mysql.createConnection({
    host     :  config.get("host"),
    user     :  config.get("user"),
    password :  config.get("password"),
    database :  config.get("database"),
});
appforEmp.get("/",(request,response)=>{
    
    connection.query("select * from  Employee_Tb",(error,result)=>{
        console.log('result '+result);
        console.log('error'+error);
        if(error==null){
            var data =JSON.stringify(result);
         
            response.setHeader("Content-Type","application/json");
            response.write(data);     
        }
        else {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);

        }
        response.end();
    })

})
appforEmp.post("/",(request,response)=>{
  var query=`insert into Employee_Tb values(${request.body.id},'${request.body.e_name}','${request.body.email}','${request.body.email}','${request.body.password}','${request.body.emp_id}','${request.body.dname}','${request.body.doj}')`;
  connection.query(query,(error ,result)=>{
    if(error==null){
       var data=JSON.stringify(result);
       response.setHeader("Content-Type","application/json");   
       response.write(data);
    }
else {
    console.log(error);
    response.setHeader("Content-Type","application/json");
    response.write(error);


}
response.end();
  })
 
})
appforEmp.put("/:id",(request,response)=>{
    var query=`update Employee_Tb set dname='${request.body.dname}',doj='${request.body.doj}' where id = ${request.params.id}`;
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        
        
        }
        response.end();
        
    })
} )
appforEmp.delete("/:Eno",(request,response)=>{
var query=`delete from Employee_Tb where id=${request.params.id}`;
connection.query(query, (error, result)=>{
    if(error==null)
    {
        var data = JSON.stringify(result) 
        response.setHeader("Content-Type","application/json");
        response.write(data);
    } 
    else
    {
        console.log(error);
        response.setHeader("Content-Type","application/json");
        response.write(error)
    }
    response.end();
})
})



module.exports=appforEmp;

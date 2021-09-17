
const express = require ('express')
const app=express()

const port=4000;

app.use((req,res,next)=>{

var date=new Date();

if (date.getDay() ==7|| date.getDay()==6|| date.getHours()<9|| date.getHours()<17)

{
  res.status(403).end( 'we are only available in working time  (monday => friday)')

}

else{

  return next();
}


}

);


app.use(express.static("amino"))
app.listen(port,(err)=>

err ? console.log(err)  :  console.log('server is running')



)

















// import express from "express";
// // import student from "student";




// const students=[

//     {
//       name:"messi",
//       id:7,
    
//     },

//     {

//      name:"ronaldo",
//      id:5,
    
//     },







// ];

// const app=express();
// app.use(express.json());
// const port = 3000;
// app.listen(port,() => console.log("listenon on port" + port));

// // app.get("/", (req,res)=> res.json(student));

// // app.get("/produit/:id",(req,res)=> res.send(req.params.id));


// // app.get("/students/:id",(req,res)=> res.json(students.find((student) => student.id == req.params.id)));



// // middlware
// // const mid=(req,res,next)=>{

// //   console.log(req.body)
// //   next()

// // }



// app.post("/add", (req, res) => {
  
//   res.json(req.body);

//  console.log(req.body);
// });







// // `http://localhost:${port}`
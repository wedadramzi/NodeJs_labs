const express = require("express");


const app = express();

//middleware
app.use(express.json());

const users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Mohamed" },
  { id: 3, name: "Mohamed" },
  { id: 4, name: "Mohamed" },
  { id: 5, name: "Mohamed" },
  { id: 6, name: "Ahmed" },
  { id: 7, name: "Mohamed" },
  { id: 8, name: "Mohamed" },
  { id: 9, name: "Mohamed" },
  { id: 10, name: "Mohamed" },
  
];

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
// get data all user
app.get("/users", (req, res) => {
  res.send(users);
});
// get data one user with insert data
app.get("/users/:id", (req, res) => {
 const { id } = req.params;
  const user = users.find((user) => user.id === +id);
  res.send(user);
});
// add data one user with its id 
app.post("/users", (req, res) => {
  const { name } = req.body;
  const id = users[users.length - 1].id + 1;
  users.push({id,name});
  res.send(users);
});

//update
// Edit trial4 
// app.put("/users/:id", (req, res) => {
//    const id = req.params.id;
//    const{name} = req.body;
//    users[+id-1].name= name2;
//    res.send(users);
// } )


// Edit trail 3 "work well"
app.put("/users/:id", (req, res) => {
  const id = req.params.id-1;
   const {name} = req.body;
   users[id]["name"] = req.body.name;
   res.send(users);
 } )


// Edit trial 2
//   app.put("/users/:id", (req, res)=>{
//     const {id} = req.params;
const {name} = req.body;
     const user = users.find((user) => user.id === +id);
    // const user = users.find((user) => user.id === +id);
     user.name= name;
//     res.send(users);
// });
  
//     // edit trial 1
       //const id  = req.params.id;
//    const name = req.body.name;
//    const index = users.indexOf((name)=>{
//         return (name.id == Number.parseInt (id))
//     });

//     if (index >= 0) {
//         const use = name [index]
//         use.name = name;
//         res.send(users);
//     } else{
//         res.send("error");
//     }

//  });

 //const user= users.filter( user => user.id !== +id); 

//delete one value first index
 app.delete("/users/:id", (req, res) => {
    //let { name } = req.body;
    const id  = req.params.id;
    //const user = users.find((user) => user.id === +id);
    const index = users.findIndex((index) => index.id === +id);
    //const user= users.filter( user => user.id === +id); 
    users.splice(index,1);
    res.send(index);
  });

 

//delete any index "not working"
// app.delete("/users/:id", (req, res) => {
//     //const { name } = req.body;
//    const id  = req.params.id;
//     const value = users[users.length - 1].id;
//     users.splice(id,value);
//     res.send(users);
//   });

 
app.listen(5000, (error) => {
  console.log("listening on port 5000");
});
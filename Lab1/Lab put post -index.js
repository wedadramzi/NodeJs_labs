//console.log("wedad queen!");

const { read, write } = require("./helper");
const [, , option, value,value2 ] = process.argv;

switch (option) {
  case "add":

    data = read();
    data.push({ id: 5, value });
    write(data);

    break;

  case "delete":
    data = read();
    // pop delete last index
    //data.pop()
   //splice delete specific index
    //data.splice(value-1,1) 
    // shift delete first index
    //data.shift()
  
    const newdata= data.filter( data => data.id !== +value); 
    write(newdata);   
   // data.filter(value=>
     // return data.value === -1;
    //});
    break;

  case "edit":
    data = read();
    // insert the want index edit and the value replaced
    data.find(data => data.id === +value)
    data.value = value2
    //data[+value-1].value= value2;
    write(data);
    break;

  case "list":
    console.log(read());
    break;

  default:
    break;
}
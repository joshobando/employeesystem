var orm = require("./config/orm");
// var result = orm.insert("department",["name"],["Logistics"],function () {
//     console.log("Added new department");
// })
// console.log(result)

// var orm = require("./config/orm");
const inquirer = require("inquirer");

inquirer
    .prompt([{
        name: "table",
        type: "input",
        message: "Which table?",
    }, 
    {
        name: "column",
        type: "input",
        message: "Which column?",
    },
    {
        name: "value",
        type: "input",
        message: "Which value?",
    },
    
])
    .then((answer) => {
        orm.insert(answer.table,[answer.column],[answer.value],function () {
                if(answer.table === "department") {
                    console.log("Added new department");
                }else if(answer.table === "employee"){
                    console.log("Added new employee");
                }else{
                    console.log("Added new row");
                }
            })
    });
const db = require("./db/connection.js");
const inquirer = require("inquirer");
require("console.table");

function mainMenu(){
  inquirer.prompt([
    {
      name: "userChoice",
      type: "list",
      choices: [
        "view all employees", "view all departments", "view all roles", "add a role", "add a department", "add an employee", "update an employee role"
      ]
    }
  ])
  .then(function(response){
    switch (response.userChoice){
      case "view all employees": 
        viewAllEmployees()
        break;
      case "view all departments":
        viewAllDepartments()
        break;
      case "view all roles":
        viewAllRoles()
        break;
      case "add a role":
        addARole()
        break;
      case "add a department":
        addADepartment()
        break;
      case "add an employee":
        addAnEmployee()
        break;
      case "update an employee role":
        updateAnEmployeeRole()

    }
  })
}
mainMenu()

function viewAllEmployees(){
  let sql = "SELECT * FROM employee";
  db.promise().query(sql).then(function([rows]){
    console.table(rows);
  }) 
  mainMenu()
}

function viewAllDepartments(){
  let sql = "SELECT * FROM department";
  db.promise().query(sql).then(function([rows]){
    console.table(rows);
  })
  mainMenu()
}

function viewAllRoles(){
  let sql = "SELECT * FROM roles";
  db.promise().query(sql).then(function([rows]){
    console.table(rows);
  })
  mainMenu()
}

function addARole (role){
  db.promise().query("INSERT INTO ROLE SET ?", role).then(function([rows]){
    console.table(rows)
  })
  mainMenu()
}

function addADepartment(department){
  db.promise().query("INSERT INTO DEPARTMENT SET ?", department).then(function([rows]){
    console.table(rows)
  })
  mainMenu()
}

function addAnEmployee(employee){
  db.promise().query("INSERT INTO employee SET ?", employee ).then(function([rows]){
    console.table(rows)

  })
    mainMenu()
  }



function updateAnEmployeeRole(employee, role){
  db.promise().query("UPDATE employee SET role_id = ? WHERE id = ? ", [role, employee])
}
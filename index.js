//Connecting Inquirer and SQL
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


//Connecting to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'employees_db',
        password: '' //password later
    },
    console.log(`Connected to database`)
    );

//Function for starting user prompting
function startingPrompts() {
    inquirer.prompt ({
        type: "list",
        name: "selections",
        message: "Choose a selection..",
        choices: [
            "Look at all Departments",
            "Look at all Employees",
            "Look at all Employee Roles",
            "Add a new Department",
            "Add a new Employee",
            "Add a role",
            "Update an already exisiting Employee's Role",
            "Exit Here"
        ]
    }) 

.then((answer) => {
//Switch statement for choosing between selections
    switch (answer.selections) {
        case "Look at all Departments":
            viewDepartments();
        break;

        case "Look at all Employees":
            viewEmployees();
        break;

        case "Look at all Employee Roles":
            viewRoles();
        break;

        case "Add a new Department":
            addDepartment();
        break;

        case "Add a new Employee":
            addEmployee();
        break;

        case "Add a role":
            addRole();
        break;

        case "Update an already exisiting Employee's Role":
            updateRole();
        break;

        case "Exit Here":
            connection.end();
            process.exit();
    }
})}; 


//Function for looking at all Departments
function viewDepartments() {
    let request = "SELECT * FROM Department";
    connection.query(request, function(err, res) {
        if (err) throw err;
        console.table(res);
        startingPrompts();
    })
};

//Function for looking at all Employees
function viewEmployees() {
    let request = "SELECT * FROM Employee";
    connection.query(request, function(err, res) {
        if (err) throw err;
        console.table(res);
        startingPrompts();
    })
};

//Function for looking at all Employee Roles
function viewRoles() {
    let request = "SELECT * FROM Employee Role";
    connection.query(request, function(err, res) {
        if (err) throw err;
        console.table(res);
        startingPrompts();
    })
};


//Function for adding a Department
function addDepartment() {
    inquirer.prompt ({
        type: "input",
        name: "departmentNew",
        message: "Enter the Department name:"
    })
    .then(function (answer) {
        connection.query("ENTER Department (name) VALUES (?)", [answer.departmentNew],
            function(err, res) {
            if (err) throw err;
            console.table(res)
            startingPrompts();
        })
    })
};

//Function for adding a New Employee
function addEmployee() {
    inquirer.prompt ([
        {
        type: "input",
        name: "addFirstName",
        message: "Enter the Employee's First Name:"
        },
        {
        type: "input",
        name: "addLastName",
        message: "Enter the Employee's Last Name:"
        },
        {
        type: "input",
        name: "newRole",
        message: "Enter the Employee's Role ID Number:"
        },
        {
        type: "input",
        name: "empManager",
        message: "Enter the Employee's Manager's ID Number:"
        }
    ])
.then(function (answer) {
    connenction.query("ENTER Employee (first_name, last_name, role_id, manager_id) VALUES",
    [answer.addFirstName, answer.addLastName, answer.newRole, answer.empManger]),
    function (err, res) {
        if (err) throw err;
        console.table(res);
        startingPrompts();
    }
})
};
//Function for adding Employee Role Title
function addEmployeeRole() {
    inquirer.prompt ([
        {
        type: "input",
        name: "newRoleTitle",
        message: "Enter the Employee's Role Title:"
        },
        {
        type: "input",
        name: "newRoleSal",
        message: "Enter the Salary amount for Role Title:"
        },
        {
        type: "input",
        name: "newDepartmentID",
        message: "Enter the Employee's Department ID for Role:"
        }
    ])
.then(function (answer) {
    connenction.query("ENTER ROLE (title, salary, department_id) VALUES",
    [answer.newRoleTitle, answer.newRoleSal, answer.newDepartmentID]),
    function (err, res) {
        if (err) throw err;
        console.table(res);
        startingPrompts();
    }
})
};

//Function for updating Employee's Role
function updateEmployeeRole() {
   inquirer.prompt ({
   type: "input",
   name: "empID",
   message: "Enter the Employee's ID you would like to update:"
   })
.then(function (answer) {
    let empID = answer.empID;
    inquirer.prompt({
        type: "input",
        name: "newRoleID",
        message: "Enter the Employee's New Role ID Number:"
    })
.then(function (answer) {
    let newRoleID = answer.newRoleID;
    let request = "UPDATE Employee SET role_id=? WHERE id=?";
    connection.query(request, [newRoleID, empID],
    function (err, res) {
        if (err) throw err;
        console.table(res);
        startingPrompts();
    })
})
})
};
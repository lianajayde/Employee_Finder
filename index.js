//Connecting Inquirer and SQL
const inquirer = require('inquirer');
const mysql = require('mysql2');

//Connecting to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: '',
        password: ''
    },
    console.log(`Connected to database`)
    );

//Function for user prompting
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
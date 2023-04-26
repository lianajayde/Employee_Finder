USE employees_db;

INSERT INTO department (name)
VALUES ("Sales"),
       ("Back End"),
       ("Research"),
       ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Representative", 40000, 1),
       ("Computer Engineer", 90000, 2),
       ("Researcher", 30000, 3),
       ("Accountant", 80000, 4),
       ("Account Manager", 144000, 5);
    

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("April", "Marin", 1, NULL),
       ("Alvin", "Carl", 2, NULL),
       ("Jameson", "Daniels", 3, NULL),
       ("Jared", "Padalecki", 4, NULL),
       ("Merissa", "Garcia", 5, NULL),
       ("Jensen", "Ackles", 6, 7),
       ("Amber", "Bent", 7, 9),
       ("Brady", "Arneg", 8, 11),
       ("Zane", "Jak", 9, 4),
       ("Kelly", "Smith", 10, 4);
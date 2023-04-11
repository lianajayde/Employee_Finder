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
       ("Account Manager", 144000, 6);
    

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("April", "Marin", 4, NULL),
       ("Alvin", "Carl", 5, NULL),
       ("Jameson", "Daniels", 6, NULL),
       ("Jared", "Padalecki", 3, NULL),
       ("Merissa", "Garcia", 8, NULL),
       ("Jensen", "Ackles", 1, 4),
       ("Amber", "Bent", 1, 1),
       ("Brady", "Arneg", 2, 1),
       ("Zane", "Jak", 3, 4),
       ("Kelly", "Smith", 1, 4);
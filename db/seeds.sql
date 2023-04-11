USE employees_db;

INSERT INTO department (name)
VALUES
    ("Sales"),
    ("Back End"),
    ("Research"),
    ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Sales Representative", 40000, 1),
    ("Computer Engineer", 90000, 2),
    ("Researcher", 30000, 3),
    ("Accountant", 80000, 4);
    

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("April", "Marin", 4, null),
    ("Alvin", "Carl", 1, 1),
    ("Jameson", "Daniels", 1, 1),
    ("Jensen", "Ackles", 1, 1),
    ("Jared", "Padalecki", 2, null),
    ("Merissa", "Garcia", 2, null),
    ("Amber", "Bent", 1, 1),
    ("Brady", "Arneg", 2, 1);
    ("Zane", "Junior", 1, 1),
    ("Kelly", "Smith", 2, 1);
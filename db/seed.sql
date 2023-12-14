INSERT INTO department (name)
VALUES 
  ("Sales"), 
  ("Picking"),
  ("Packing"),
  ("Driving");

INSERT INTO role (title, salary, department_id)
VALUES
  ("Sales Person", 8000.00 , 1),
  ("Picker", 3000.00, 2),
  ("Packager", 4000.00, 3),
  ("Driver", 7000.00, 4),
  ("Picker", 3500.00, 2),
  ("Packager", 4000.00, 3),
  ("Driver", 7000.00, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("Mip", "Yeah", 1, NULL),
  ("jimmy", "Jimster", 2, 1),
  ("Mikey", "Guy", 2, 1),
  ("Seth", "Snaketoes", 4, 1),
  ("Beth", "Breath", 4, 1),
  ("Frank", "Johnson", 3, 1),
  ("Tom", "Towne", 3, 1);
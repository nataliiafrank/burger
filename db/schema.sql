CREATE TABLE burgers (
id INT NOT NULL auto_increment,

burger_name VARCHAR(100) NOT NULL,

devoured  BOOLEAN NOT NULL DEFAULT false,

PRIMARY KEY (id)
);
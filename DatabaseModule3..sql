CREATE DATABASE customers_database;

USE customers_database;


CREATE TABLE IF NOT EXISTS customer_info (
    id INT AUTO_INCREMENT PRIMARY KEY,  
    username VARCHAR(100) NOT NULL,    
    email VARCHAR(100) NOT NULL,       
    password VARCHAR(255) NOT NULL
    );
    
INSERT INTO customer_info (username, email, password) 
VALUES 
('Asemahle Koti', 'asemahlekoti@gmail.com', 'customer1'),
('Namhla Siza', 'nanmdlasiza@gmail.com', 'customer2'),
('John Sazi', 'johnsazi@gmail.com', 'customer3'),
('Bukho Sean', 'bukhosean@gmail.com', 'customer4'),
('Sibahle Mpilo', 'sibahlempilo@gmail.com', 'customer5'),
('Athenkosi Mfula', 'mfulaathenkosi@gmail.com', 'customer6'),
('Anathi Luzi', 'anathiluzi@gmail.com', 'customer7'),
('Simnikiwe Adonis', 'simnikiweadonis@gmail.com', 'customer8');

CREATE TABLE `customers_database`.`admnin_login` (
  `admin_id` INT NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`admin_id`));
  
  



   


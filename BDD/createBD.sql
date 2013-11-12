CREATE TABLE as_User (	
id INT AUTO_INCREMENT PRIMARY KEY,
login VARCHAR(255) NOT NULL, 
password VARCHAR(255) NOT NULL,
role VARCHAR (255) NOT NULL) ;

CREATE TABLE as_Service (	
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL) ;

CREATE TABLE as_ServiceComposition (	
id INT AUTO_INCREMENT PRIMARY KEY,
users INT NOT NULL,
services INT NOT NULL,
INDEX users_ind (users),
FOREIGN KEY (users) REFERENCES as_User(id),
INDEX services_ind(services),
FOREIGN KEY (services) REFERENCES as_Service(id));

CREATE TABLE as_Pages(	
id INT AUTO_INCREMENT PRIMARY KEY,
pageName VARCHAR(255) NOT NULL,
pageURL VARCHAR(255) NOT NULL);

CREATE TABLE as_Permission(	
id INT AUTO_INCREMENT PRIMARY KEY,
pages INT NOT NULL,
services INT NOT NULL,
INDEX pages_ind (pages),
FOREIGN KEY (pages) REFERENCES as_Pages(id),
INDEX services_ind(services),
FOREIGN KEY (services) REFERENCES as_Service(id));

CREATE TABLE as_Preference(	
id INT AUTO_INCREMENT PRIMARY KEY,
user INT NOT NULL,
language VARCHAR(255) NOT NULL,
timezone VARCHAR(255) NOT NULL
INDEX user_ind (user),
FOREIGN KEY (user) REFERENCES as_User(id));

CREATE TABLE as_GoNoGo (	
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
users INT NOT NULL,
dateLaunch DATE NOT NULL,
INDEX users_ind (users),
FOREIGN KEY (users) REFERENCES as_User(id));

CREATE TABLE as_Taches (	
id INT AUTO_INCREMENT PRIMARY KEY,
					service INT NOT NULL,
name VARCHAR(255) NOT NULL,
INDEX service_ind(service),FOREIGN KEY (service) REFERENCES as_Service(id));

CREATE TABLE as_Historique (	
id INT AUTO_INCREMENT PRIMARY KEY,
gonogo INT NOT NULL,
tache INT NOT NULL, 
datecheck DATE, 
checked BOOLEAN,
INDEX gonogo_ind(gonogo),
FOREIGN KEY (gonogo) REFERENCES as_GoNoGo(id),
INDEX tache_ind(tache),FOREIGN KEY (tache) REFERENCES as_Taches(id));







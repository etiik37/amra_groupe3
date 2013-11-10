CREATE TABLE as_User (id INT AUTO_INCREMENT PRIMARY KEY,login VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL) ;
CREATE TABLE as_Service (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL) ;
CREATE TABLE as_ServiceComposition (id INT AUTO_INCREMENT PRIMARY KEY,users INT NOT NULL,services INT NOT NULL,INDEX users_ind (users),
FOREIGN KEY (users) REFERENCES as_User(id),INDEX services_ind(services),FOREIGN KEY (services) REFERENCES as_Service(id));
CREATE TABLE as_Pages(id INT AUTO_INCREMENT PRIMARY KEY,pageName VARCHAR(255) NOT NULL,pageURL VARCHAR(255) NOT NULL);
CREATE TABLE as_Permission(id INT AUTO_INCREMENT PRIMARY KEY,pages INT NOT NULL,services INT NOT NULL,INDEX pages_ind (pages),
FOREIGN KEY (pages) REFERENCES as_Pages(id),INDEX services_ind(services),FOREIGN KEY (services) REFERENCES as_Service(id));
CREATE TABLE as_Checklist (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL,services INT NOT NULL,
INDEX services_ind(services),FOREIGN KEY (services) REFERENCES as_Service(id));
CREATE TABLE as_Taches (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL, checklist INT NOT NULL,INDEX checklist_ind(checklist),FOREIGN KEY (checklist) REFERENCES as_Checklist(id));
CREATE TABLE as_GoNoGo (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL,users INT NOT NULL,INDEX users_ind (users),
FOREIGN KEY (users) REFERENCES as_User(id));
CREATE TABLE as_ChecklistRank (id INT AUTO_INCREMENT PRIMARY KEY,gonogo INT NOT NULL,checklist INT NOT NULL,INDEX gonogo_ind (gonogo),
FOREIGN KEY (gonogo) REFERENCES as_GoNoGo(id),INDEX checklist_ind(checklist),FOREIGN KEY (checklist) REFERENCES as_Checklist(id));
CREATE TABLE as_Historique (id INT AUTO_INCREMENT PRIMARY KEY,checklistrank INT NOT NULL,tache INT NOT NULL, datecheck DATE, checked BOOLEAN,
INDEX checklistrank_ind(checklistrank),FOREIGN KEY (checklistrank) REFERENCES as_ChecklistRank(id),INDEX tache_ind(tache),FOREIGN KEY (tache) REFERENCES as_Taches(id));

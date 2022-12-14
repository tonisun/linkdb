DROP TABLE IF EXISTS `urls`;

CREATE TABLE IF NOT EXISTS `urls` (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
    `url` VARCHAR(255), 
    `desc` VARCHAR(255), 
    `createdAt` DATETIME NOT NULL, 
    `updatedAt` DATETIME NOT NULL
);

sequelize model:create --name users --attributes firstName:string,lastName:string,address:text,email:string,password:string,mobile:string,dateOfCreation:date,dateLastModified:date
sequelize model:create --name organization --attributes name:string,contactUserId:integer,address:text,dateOfCreation:date,dateLastModified:date
sequelize model:create --name orgUsers --attributes userId:integer,orgId:integer,dateLastModified:date,dateOfCreation:date
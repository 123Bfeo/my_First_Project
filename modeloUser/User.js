//listar todos los usuarios                               ()
//Buscar al usuario por su id                             ()
//buscar al usuario que se quiere loguear por su usuario  ()
const fs = require('fs');
const User = {
    fileName: "./databaseUser/users.json",
    // tranformo el Json en un array de objeto
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    //listado de Uasuarios 
    listUsers: function () {
        return this.getData()
    },
    // buscar un usuario por id
    UserById: function (id) {
        let todosLosUser = this.listUsers();
        let buscarUser = todosLosUser.find(user => user.id === id);
        return buscarUser;
    },
    //buscar un usuario por email
    searchUserEmail: function (text) {
        const allUsers = this.listUsers();
        const searchUser = allUsers.find(user => user["email"] === text);
        return searchUser;
    }
}
module.exports = User;
//console.log(User.getData())
//console.log(User.listUsers())
//console.log(User.UserById(2))
//console.log(User.searchUserEmail("Mayerly@gmail.com"))

const {sequelize} = require("./db")
const {Project, BlogEntry, User, Task, Name} = require('./Model')

sequelize.sync().then(function () {

    // Create user "Jason Bourne"
    User.create({
        fullName: "Jason Bourne",
        title: "developer"
    }).then(function (user) {

        console.log("user created");

        // Create "Task 1" for the new user
        Task.create({
            title: "Task 1",
            description: "Task 1 description",
        }).then(function(){ console.log("Task 1 created")});

        // Create "Task 2" for the new user
        Task.create({
            title: "Task 2",
            description: "Task 2 description",
        }).then(function(){ console.log("Task 2 created")});
    });
});



sequelize.sync().then(function () {

    Name.create({
        fName: "Kyler",
        lName: "Odin"
    }).then(function(){ console.log("Kyler Odin created")});

    Name.create({
        fName: "Grier",
        lName: "Garrick"
    }).then(function(){ console.log("Grier Garrick created")});

    Name.create({
        fName: "Kolby",
        lName: "Greyson"
    }).then(function(){ console.log("Kolby Greyson created")});

});

sequelize.sync().then(function () {

    // return all first names only
    Name.findAll({
        attributes: ['fName']
    }).then(function(data){
        console.log("All first names");
        for(let i =0; i < data.length; i++){
            console.log(data[i].fName);
        }
    });

    // return all first names where id == 2
    Name.findAll({
        attributes: ['fName'],
        where: {
            id: 2
        }
    }).then(function(data){
        console.log("All first names where id == 2");
        for(let i =0; i < data.length; i++){
            console.log(data[i].fName);
        }
    });

});

sequelize.sync().then(function () {
    // update User 2's last name to "James"
    // NOTE: this also updates the "updatedAt field"
    Name.update({
        lName: "James"
    }, {
        where: { id: 2 } // only update user with id == 2
    }).then(function () { console.log("successfully updated user 2");});

});

sequelize.sync().then(function () {

    // remove User 3 from the database
    Name.destroy({
        where: { id: 3 } // only remove user with id == 3
    }).then(function () { console.log("successfully removed user 3");});

});
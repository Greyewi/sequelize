const Sequelize = require("sequelize");
const {sequelize} = require("./db")

const Project = sequelize.define('Project', {
    project_id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // use "project_id" as a primary key
        autoIncrement: true // automatically increment the value
    },
    title: Sequelize.STRING,
    description: Sequelize.TEXT
},{
    createdAt: false, // disable createdAt
    updatedAt: false // disable updatedAt
});

const BlogEntry = sequelize.define('BlogEntry', {
    title: Sequelize.STRING,  // entry title
    author: Sequelize.STRING, // author of the entry
    entry: Sequelize.TEXT, // main text for the entry
    views: Sequelize.INTEGER, // number of views
    postDate: Sequelize.DATE // Date the entry was posted
});

const User = sequelize.define('User', {
    fullName: Sequelize.STRING, // the user's full name (ie: "Jason Bourne")
    title: Sequelize.STRING // the user's title within the project (ie, developer)
});

const Task = sequelize.define('Task', {
    title: Sequelize.STRING, // title of the task
    description: Sequelize.TEXT, // main text for the task
});
User.hasMany(Task);

const Name = sequelize.define('Name', {
    fName: Sequelize.STRING,  // first Name
    lName: Sequelize.STRING, // Last Name
});

module.exports = {
    Project, BlogEntry, User, Task, Name
}
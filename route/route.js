const departmentController = require('../controller/deparmentController');
const personController = require('../controller/personConrtoller');
const studentcontroller=require('../controller/studentController');
module.exports = (app) => {
    app.post('/department', departmentController.createdepartment);
    app.post('/person', personController.createperson);
    app.post('/student',studentcontroller.createstudent);
};
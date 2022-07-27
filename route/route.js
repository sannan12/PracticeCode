const departmentController = require('../controller/deparmentController');
const personController = require('../controller/personConrtoller');
const studentcontroller=require('../controller/studentController');
const docalculationController = require('../controller/calculationController');
module.exports = (app) => {
    app.post('/department', departmentController.createdepartment);
    app.post('/person', personController.createperson);
    app.post('/student',studentcontroller.createstudent);
    app.get('/student',studentcontroller.getstudent);
    app.get('/department',departmentController.finddepartment);
    app.get('/person',personController.getperson);
    app.post('/calculation',docalculationController.findcalculation);
    app.post('/array',docalculationController.arraycalculation);

};
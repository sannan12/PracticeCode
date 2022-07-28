const studentModel = require('../model/studentModel');
class studentController {
    constructor() {

        this.createstudent = this.createstudent.bind(this);
        this.getstudent = this.getstudent.bind(this);
        this.response = {
            success: true,
            data: "",
        }

        this.response = {
            success: false,
            error: "",
        };
    };


    async createstudent(req, res) {
        const responseclass = new studentController();
        let studentObject = {

            name: req.body.name,
            rollno: req.body.rollno,
            university: req.body.university,
            sector: req.body.sector,
            city: req.body.city,
        }
        studentModel.create(studentObject, function (error, result) {
            if (error) {
                responseclass.createstudent.errorresponse.error = error
                return res.status(500).send(responseclass.errorresponse)

            }
            responseclass.response.data = result
            return res.status(200).send(responseclass.response)
        })
    }
    async getstudent(req, res) {
        const responseclass = new studentController();
        studentModel.find(function (error, result) {
            if (error) {
                responseclass.getstudent.errorresponse.error = error
                return res.status(500).send(responseclass.errorresponse)
            }
            responseclass.response.data = result
            return res.status(200).send(responseclass.response)
        })

    }

    async updatestudent(req, res) {
        const responseclass = new studentController();
        let studentupdateobject = {
            name: req.body.name,
            rollno: req.body.rollno,
            university: req.body.university,
            city: req.body.city,
            sector: req.body.sector,
        }

        studentModel.findOneAndUpdate({ 'city': req.body.city }, studentupdateobject, function (error, result) {
            if (error) {
                responseclass.errorresponse.error = error
                return res.status(500).send(responseclass.errorresponse)
            }
            if (result) {
                responseclass.response.data = result
                return res.status(200).send(responseclass.response)

            }

        })
    }
    async deletestudent(req, res) {
        const responseclass = new studentController();

        studentModel.findOneAndRemove({ 'rank': req.body.rollno }, function (error, result) {
            if (error) {
                responseclass.errorresponse.error = error
                return res.status(500).send(response.errorresponse)
            }
            if (result) {
                responseclass.response.data = result
                return res.status(200).send(responseclass.response)
            }

        })
    }
};



module.exports = new studentController;

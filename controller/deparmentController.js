const departmentModel = require('../model/departmentModel');
class departmentController {
    constructor() {
        this.createdepartment = this.createdepartment.bind(this);
        this.finddepartment = this.finddepartment.bind(this);
        this.response = {
            success: true,
            data: "",
        }

        this.errorresponse = {
            success: false,
            error: "",
        };

    };
    async createdepartment(req, res) {
        const responseclass = new departmentController();
        let departmentObject = {

            rank: req.body.rank,
            occupation: req.body.occupation,
            place: req.body.place,
        }
        departmentModel.create(departmentObject, function (error, result) {
            if (error) {
                responseclass.errorresponse.error = error
                return res.status(500).send(responseclass.errorresponse)

            }
            responseclass.response.data = result
            return res.status(200).send(responseclass.response)
        })
    }
    async finddepartment(req, res) {
        const responseclass = new departmentController();
        departmentModel.find(function (error, result) {
            if (error) {
                responseclass.errorresponse.error = error
                return res.status(500).send(response.errorresponse)

            }
            responseclass.response.data = result
            return res.status(200).send(responseclass.response)
        })
    }
    async updatedepartment(req, res) {
        const responseclass = new departmentController();
        let departmentupdateobject = {
            rank: req.body.rank,
            occupation: req.body.occupation,
            place: req.body.place,
        }
        departmentModel.findOneAndUpdate({ 'rank': req.body.rank }, departmentupdateobject, function (error, result) {
            if (error) {
                responseclass.errorresponse.error = error
                return res.status(500).send(response.errorresponse)
            }
            if (result)
                responseclass.response.data = result
            return res.status(200).send(responseclass.reponse)


        })
    }

    async deletedepartment(req, res) {
        const responseclass = new departmentController();

        departmentModel.findOneAndRemove({ 'rank': req.body.rank }, function (error, result) {
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

module.exports = new departmentController;

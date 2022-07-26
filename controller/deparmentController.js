const departmentModel = require('../model/departmentModel');
class departmentController {
    constructor() {
        this.createdepartment = this.createdepartment.bind(this);


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
    
            place: req.body.rank,
            date: req.body.occupation,
            place:req.body.place
        }
        departmentModel.create(departmentObject, function (error, result) {
            if (error) {
                responseclass.createdeparment.errorresponse.error = error
                return res.status(500).send(responseclass.errorresponse)

            }
            responseclass.response.data = result
            return res.status(200).send(responseclass.response)
        })
    }
}


module.exports = new departmentController;

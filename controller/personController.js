const personModel = require('../model/personModel');
class personController {
    constructor() {
        this.createperson = this.createperson.bind(this);
        this.getperson = this.getperson.bind(this);
        this.response = {
            success: true,
            data: "",


        }
        this.response = {
            success: false,
            error: "",
        };
    };
    // Sannan
    //my name is sannan
    //my codec

    async createperson(req, res) {
        const responseclass = new personController();
        let personObject = {

            date: req.body.date,
            name: req.body.name,
            place: req.body.place,
        }
        personModel.create(personObject, function (error, result) {
            if (error) {
                responseclass.createperson.errorresponse.error = error
                return res.status(500).send(responseclass.errorresponse)

            }
            responseclass.response.data = result
            return res.status(200).send(responseclass.response)
        })
    }
    async getperson(req, res) {
        const responseclass = new personController();
        personModel.find(function (error, result) {
            if (error) {
                responseclass.getperson.errorresponse = error
                return res.status(500).send(responseclass.errorresponse)
            }
            responseclass.response.data = result
            return res.status(200).send(responseclass.response)
        })
    }
    async updateperson(req, res) {
        const responseclass = new personController();
        let personupdateobject = {
            name: req.body.name,
            date: req.body.date,
            place: req.body.place,
        }
        personModel.findOneAndUpdate({ 'name': req.body.name }, personupdateobject, function (error, result) {
            if (error) {
                responseclass.errorresponse.error = error
                return res.status(500).send(responseclass.response)
            }
            if (result) {
                responseclass.response.data = result
                return res.status(200).send(responseclass.response)
            }
        })
    }
    async deleteperson(req, res) {
        const responseclass = new personController();

        personModel.findOneAndRemove({ 'rank': req.body.place }, function (error, result) {
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


module.exports = new personController;






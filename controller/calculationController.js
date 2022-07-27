const calculationModel = require('../model/calculationModel');
class calculationController {
    constructor() {
        this.findcalculation = this.findcalculation.bind(this);
        this.arraycalculation = this.arraycalculation.bind(this);
        this.response = {
            success: true,
            data: "",
        }

        this.errorresponse = {
            success: false,
            error: "",
        }
    }
    async findcalculation(req, res) {
        const responseclass = new calculationController();

        let num1 = parseInt(req.body.num1);
        let num2 = parseInt(req.body.num2);
        let num3 = parseInt(req.body.num3);
        let result = num1 * num2 * num3
        responseclass.response.data = result
        return res.status(200).send(responseclass.response)

    }

    async arraycalculation(req, res) {
        const responseclass = new calculationController();
        let number = req.body.array
        let num1=req.body.num1
        let array = JSON.parse(number)
        var result = 1
        for (var i = 0; i < array.length; i++) {
             result = result * array[i];
        }
        responseclass.response.data = result
         result=result*num1;
        responseclass.response.data = result;
        return res.status(200).send(responseclass.response)
    }

};
module.exports = new calculationController;


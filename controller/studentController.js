const studentModel=require('../model/studentModel');
class studentController{
    constructor(){
        
        this.createstudent=this.createstudent.bind(this);
        this.response={
            success:true,
            data:"",


        }
        this.response={
            success:false,
            error:"",
        };
    };

    async createstudent(req,res){
        const responseclass = new studentController();
        let studentObject = {
    
            name: req.body.name,
            rollno: req.body.rollno,
            university:req.body.university,
            sector:req.body.sector,
            city:req.body.city,
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
}

    



module.exports = new studentController;
const personModel=require('../model/personModel');
class personController{
    constructor(){
        this.createperson=this.createperson.bind(this);
        this.getperson=this.getperson.bind(this);
        this.response={
            success:true,
            data:"",


        }
        this.response={
            success:false,
            error:"",
        };
    };
    // Sannan
    //my name is sannan
    //my code

    async createperson(req,res){
        const responseclass = new personController();
        let personObject = {
    
            date: req.body.date,
            name: req.body.name,
            place:req.body.place,
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
    async getperson(req,res){
        const responseclass= new personController();
        personModel.find(function(error,result){
            if(error){
                responseclass.getperson.errorresponse=error
                return res.status(500).send(responseclass.errorresponse)
            }
            responseclass.response.data=result
            return res.status(200).send(responseclass.response)
        })
    }
    

};


module.exports = new personController;



    


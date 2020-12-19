//const ContactModel=require('../model/ContactModel');


//used to store a new contact data into the table
exports.storeContactData=(req,res,next)=>
{
        
        let contact=new ContactModel({
            username:req.body.username,
            _id:req.body.uid,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message,
            createdAt:Date.now(),
        });
        contact.save().then((data)=>{
            res.status(200).json({
                data
            })
        }).catch(error => {
            res.status(404).json({
                message:error.message
            })
        })
}
//used to fetch all contact data in the contact table
exports.getAllContactData=(req,res,next)=>
{
    ContactModel.find()
    .then(contacts=>{
        res.json(contacts)
    })
    .catch((e)=>{
        res.json(e.message);
    })
}


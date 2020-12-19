const ContactModel=require('../model/Contact');
const pool =require('../model/postgresql_connection');
var ObjectId = require('mongodb').ObjectID;


exports.storeContactData=(req,res,next)=>
{
    let id = new ObjectId();
    
    let username= req.body.username;
    let email   = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;
    let num     = req.body.num;
    
    let contact=new ContactModel({
        _id: new ObjectId(id),
        username:username,
        email:email,
        subject:subject,
        message:message,
        
    });
    console.log(id);
    //1== write into PostgreSQL
    if(num==1)
    {
        console.log("inserting data into Postgresql");
        let query= "'"+id+"','"+username+"','"+email+"','"+subject+"','"+message+"'";
        console.log(query);
        pool.query("INSERT INTO contact (uid,username,email,subject,message) VALUES ("+query+")", function(err,result, fields) {
            if(err) {
               console.log('error running query', err);
               res.json(err.message);
            }
            else{
                console.log("inserting data into MongoDB");
                
                contact.save().then((data)=>{
                    res.status(200).json({
                        data
                    });
                });
                pool.end();
            }
            
        
        
        });
    }
    //2== write data into MongoDB
    else
    {
        console.log("inserting data into MongoDB");
        
        contact.save().then((data)=>{
                console.log("inserting data into Postgresql");
                let query= "'"+id+"','"+username+"','"+email+"','"+subject+"','"+message+"'";
                //console.log(query);
                pool.query("INSERT INTO contact (uid,username,email,subject,message) VALUES ("+query+")", function(err,result, fields) {
                    if(err) {
                        console.log('error running query', err);
                        res.json(err.message);
                    }
                    else{
                        //console.log(result.rows[0]);
                        res.status(200).json({
                            contact
                        })
                        //console.log(result);
                        pool.end();
                    }
                    
                });

        }).catch(error => {
            res.status(404).json({
                message:error.message
            })
        })
    }

}
//used to fetch all contact data in the contact table
exports.getAllContactData=(req,res,next)=>
{
    let num=req.params.num;
    if(num==1)
    {
        pool.query('Select * From contact', function(err, result, fields) {
            if(err) {
               console.log('error running query', err);
               res.status(err.message);
            }
            else
            {
                console.log(result['rows']);
                res.status(200).json(result['rows']);
            }
          });
    }
    else
    {
        ContactModel.find()
        .then(contacts=>{
            res.json(contacts)
        })
        .catch((e)=>{
            res.json(e.message);
        })
    }
    
}

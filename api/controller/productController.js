//const ProductModel=require('../model/ProductModel');

//used to store a new contact data into the table
exports.storeProductData=(req,res,next)=>
{
        
        let product=new ProductModel({
            productName:req.body.productName,
            productDetails:req.body.productDetails,
            createdAt:Date.now(),
        });
        product.save().then((data)=>{
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
exports.getAllProductData=(req,res,next)=>
{
    ProductModel.find()
    .then(products=>{
        res.status(200).json(products)
    })
    .catch((e)=>{
        res.json(e.message);
    })
}

const contactApiRoute=require('./contactApiRoute');
const productApiRoute=require('./productApiRoute');

const routes=[
    {
        path:'/contactAPI', 
        handler: contactApiRoute
    },
    {
        path:'/productAPI', 
        handler: productApiRoute
    },
    {
        path: '/',
        handler:(req,res)=>{
            res.json({
                message: "Hello Developer!!!!!!!!!"
            })
        }
    }
]

module.exports = (app) => {
        routes.forEach(r =>{
            app.use(r.path,r.handler)
        })
}
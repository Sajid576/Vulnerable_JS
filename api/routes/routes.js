
const contactApiRoute=require('./contactApiRoute');
const productApiRoute=require('./productApiRoute');
const bookApiRoute = require('./bookApiRoute')
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
        path:'/bookAPI', 
        handler: bookApiRoute
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

const contactApiRoute=require('./contactApiRoute');
//const excelApiRoute=require('./excelApiRoute');
const bookApiRoute = require('./bookApiRoute');
const routes=[
    {
        path:'/contactAPI', 
        handler: contactApiRoute
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
    //app.use(excelApiRoute)
        routes.forEach(r =>{
            app.use(r.path,r.handler)
        })
}
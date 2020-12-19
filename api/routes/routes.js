
const contactApiRoute=require('./contactApiRoute');
const productApiRoute=require('./productApiRoute');
const excelApiRoute=require('./excelApiRoute');

const routes=[
    {
        path:'/contactAPI', 
        handler: contactApiRoute
    },
    {
        path:'/productAPI', 
        handler: productApiRoute
    },
    // {
    //     path:'/excelAPI', 
    //     handler: excelApiRoute
    // },
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
    app.use(excelApiRoute)
        routes.forEach(r =>{
            app.use(r.path,r.handler)
        })
}
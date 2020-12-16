
const contactApiRoute=require('./contactApiRoute');

const routes=[
    {
        path:'/contactAPI', 
        handler: contactApiRoute
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
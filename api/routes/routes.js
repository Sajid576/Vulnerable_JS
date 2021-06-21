const user_route = require('./user_route');
const routes=[
    {
        path:'/userapi', 
        handler: user_route
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
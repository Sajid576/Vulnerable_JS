const user_route_Sql = require('./user_route_sql');
const user_route_NoSQL = require("./user_route_nosql");
const routes = [
  {
    path: "/sql/userapi",
    handler: user_route_Sql,
  },
  {
    path: "/NoSQL/userapi",
    handler: user_route_NoSQL,
  },
  {
    path: "/",
    handler: () => {
      res.json({
        message: "Hello Developer!!!!!!!!!",
      });
    },
  },
];

module.exports = (app) => {
        routes.forEach(r =>{
            app.use(r.path,r.handler)
        })
}


app.get('/posts/:id',(req, res) => {
    const query='SELECT * FROM ITEMS WHERE ID ='+req.params.id+';';
    Database.run(query,(err, result)=>{
        res.json(result);
    })
})

/**
 * ID=1
 * QUERY= SELECT * FROM ITEMS WHERE ID =1;
 * OUTCOME= The document which id is 1 is returned
 */

 /**
 * ID=1 OR TRUE
 * QUERY= SELECT * FROM ITEMS WHERE ID =1 OR TRUE;
 * OUTCOME= All the items in the table ITEMS are returned
 */

 /**
 * 
 * ID = 1 UNION SELECT USERNAME,PASSWORD FROM USERS
 * QUERY= SELECT * FROM ITEMS WHERE ID =1 UNION SELECT USERNAME,PASSWORD FROM USERS;
 * OUTCOME= The items which id is 1 is returned.Also the usernames and hashed passwords of the users are returned too.
 */


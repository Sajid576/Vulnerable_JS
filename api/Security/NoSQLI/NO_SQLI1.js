/**
 * Author: Sajid Ahmed
 * 
 */


app.post('/posts/:id',(req, res) => {
    const query = {type: req.body.desiredType};

    Document.find(query).exec()
       .then((r) => {
           res.json(r);
       })


});


/**
 * req.body= {desiredType:"blog"}
 * query   = {type:"blog"}
 * outcome = All documents which 'type' equals 'blog'
 * 
 */


 /**
 * req.body= {desiredType:{$ne: 0 }   }
 * query   = {type:{$ne: 0 }}
 * outcome = All documents which field 'type' does not equal 0 
 * 
 */

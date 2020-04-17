 const express=require('express');
 const router=express.Router();

 //including Item model
 const Item=require('../../models/Item')

 /*
    if it was being done in server.js, we would have used server.get('/api/items/', ...)
    but since we've done an auto route in server.js to this file we use router.get('/', ...)
 */

 router.get('/', (req, res) => {
  Item.find()
   .sort({date: -1})
   .then(items=>res.json(items))
   //return res.json({msg: "success"})
 });

 router.post('/', (req, res) => {
     const newItem=new Item({
         name: req.body.name
     });

     newItem.save().then(item=>res.json(item));
 })

 module.exports = router;
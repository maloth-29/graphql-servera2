import express from 'express'

const  router= express.Router();

router.get("/name",function(req,res,next){
    res.send("vinay")
})

export default router;
let mongoose = require("mongoose");

    express = require("express");
    router = express.Router();

//student model
let studentSchema = require("../models/Student");

//create Student
router.route('/create-student').post((req,res,next) => {
    studentSchema.create(req.body, (error,data) => {
        if(error){
            return next(error)
        }else{
            console.log(data);
            res.json(data);
        }
    })
});

//Read students
router.route('/').get((req,res) => {
    studentSchema.find((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data);
        }
    })
});

//Get single student data
router.route('/edit-student/:id').get((req,res) => {
    studentSchema.findByID(req.params.id, (error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)

        }
    })
});

//updata student data
router.route('/update-student/:id').put((req,res,next) => {
    studentSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
});

//Delete Student data
router.route('/delete-student/:id').delete((req,res,next) => {
    studentSchema.findByIdAndDelete(req.params.id, (error,data) => {
        if(error){
            return next(error)        
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })
});

module.exports = router;
const express=require("express");
const router=express.Router();

const{getAllStudents,createStudent}=require("../controllers/studentsController");
router.get("/",getAllStudents);
router.post("/",createStudent);
router.post("/update/:id",createStudent);
router.post("/delete/:id",createStudent);
module.exports=router;

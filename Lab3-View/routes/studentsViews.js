const express = require("express");
const Student = require("../models/student")

const router = express.Router();

router.get("/add", (req, res) => {
    res.render("add-student", { title: "Add Student" })
})

router.post("/add", async (req, res) => {
    await Student.add(req.body);
    res.redirect("/students/view")
})

router.get("/view", async (req, res) => {
    const students = await Student.getAll();
    res.render("view-students", { title: "View Students", students })
})

router.get("/del/:id", async (req, res) => {
    await Student.remove(req.params.id)
    res.redirect("/students/view")
})

router.get("/edit/:id", async (req, res) => {
    const student = await Student.getOne(req.params.id)
    res.render("edit-student", { title: "Edit Students", student })
})

router.post("/edit/:id", async (req, res) => {
    console.log("edit");
    console.log(req.body);
    await Student.edit(req.params.id, req.body)
    res.redirect("/students/view")
})


module.exports = router
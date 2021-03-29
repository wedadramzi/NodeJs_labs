const express = require("express");

const Student = require("../models/student")
const StudentController = require("../controller/student")

const router = express.Router();

router.get("/", StudentController.getStudents)

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const student = await Student.getOne(id)
        if (!student) return res.status(404).json({ err: "no student with the given id " })
        res.json(student);
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})

router.post("/", async (req, res) => {
    const { error } = Student.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)
    const student = await Student.add(req.body)
    res.json(student)
})

router.put("/:id", async (req, res) => {
    const { error } = Student.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)
    try {
        const student = await Student.edit(req.params.id, req.body)
        res.json(student)
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const student = await User.remove(req.params.id)
        res.json(student)
    } catch (error) {
        res.status(400).json({ err: "invalid-id" })
    }
})


module.exports = router

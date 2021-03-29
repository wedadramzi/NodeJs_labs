const express = require("express");
const Student = require("./models/students");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


const router = express.Router();

router.post("/signup", async (req, res) => {
    const { email, password } = req.body

    let student = await Student.findOne({ email })
    if (student) return res.status(400).send("email already existed")

    const encryptedPass = await bcrypt.hash(password, 12)

    student = await new Student({ email, password: encryptedPass }).save();

    res.json({ _id: student._id, email: student.email })
})

router.post("/signin", async (req, res) => {
    const { email, password } = req.body

    let student = await Student.findOne({ email })
    if (!student) return res.status(400).send("wrong email or password")

    const isValidPass = await bcrypt.compare(password, student.password)
    if (!isValidPass) return res.status(400).send("wrong email or password")

    const token = jwt.sign({
        email, isAdmin: false
    }, "secretkey")

    res.json({token})
})

module.exports = router
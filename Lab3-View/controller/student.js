exports.getStudents = async (req, res) => {
    const students = await Student.getAll()
    res.json(students)
}
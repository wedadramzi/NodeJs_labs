const mongoose = require("mongoose");
const Joi = require("joi");

const mongooseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
})

const joiSchema = Joi.object({
    name : Joi.string().alphanum().min(3).max(20).required(),
    phone: Joi.number().min(10).max(12).required(),
    address : Joi.string().min(3).max(20).required()
})

const Student = mongoose.model("Student", mongooseSchema);

exports.add = (student) => new Student(student).save();
exports.getAll = () => Student.find();
exports.getOne = (id) => Student.findById(id);
exports.edit = (id, student) => Student.findByIdAndUpdate(id, student);
exports.remove = (_id) => Student.findOneAndDelete({_id});

exports.validate = (student)=> joiSchema.validate(student);
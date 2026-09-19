const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://fazrinshaik65_db_user:Jk3HfZJSij41yP0u@cluster0.cxkn35d.mongodb.net/LabDB?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
const studentSchema = new mongoose.Schema({
    name: String,
    rollNumber: Number,
    course: String
});
const Student = mongoose.model('Student', studentSchema);
app.get('/', async (req, res) => {
    const students = await Student.find();
    res.render('apphome', { students });
});
app.post('/students', async (req, res) => {
    try {
        const student = new Student({
            name: req.body.name,
            rollNumber: req.body.rollNumber,
            course: req.body.course
        });
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.delete('/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
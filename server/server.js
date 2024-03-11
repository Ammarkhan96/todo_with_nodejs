const express = require("express")
const fs = require('fs')
const todos = require('./MOCK_DATA (3).json')
const yup = require('yup')
const cors = require('cors');

const app = express()
const PORT = 8001
app.use(cors());
app.use(express.json());



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

//Middleware  (but for now assume this is a Plugin)
app.use(express.urlencoded({ extended: false }))


const titleDetail = yup.object({
    title: yup.string().required(),
})

//Routes

app.get("/todos", (req, res) => {
    const html = `
    <ol>
       ${todos.map(user => `<li>${user.title}</li>`).join("")}
    </ol>
    `;
    res.send(html);
})
//run (http://localhost:8001/todos)


//REST API
app.get('/api/todos', (req, res) => {
    return res.json(todos)
})
//run (http://localhost:8001/api/todos)

app
.route("/api/todos/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find((todo) => todo.id === id);
    return res.json(todo);
})



app.post("/api/todos", async (req, res) => {
    try {
        const body = await titleDetail.validate(req.body);
        todos.push({ ...body, id: todos.length + 1 });
        fs.writeFile('./MOCK_DATA (3).json', JSON.stringify(todos), (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to write to file' });
            }
            return res.json({ status: "success", id: todos.length });
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});



app.patch("/api/todos/:id", async (req, res) => {
    const id = Number(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    try {
        const updatedTodo = await  titleDetail.validate(req.body);
        todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
        fs.writeFile('./MOCK_DATA (3).json', JSON.stringify(todos), (err, data) => {
            return res.json({ status: "success" });
        });
    } catch (error) {
        return res.status(400).json({ error: error.errors.join(', ') });
    }
});


app.delete("/api/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    todos.splice(todoIndex, 1);
    fs.writeFile('./MOCK_DATA (3).json', JSON.stringify(todos), (err, data) => {
        return res.json({ status: "success" });
    });
});


app.listen(PORT, () =>console.log(`Server Started at PORT: ${PORT}`))

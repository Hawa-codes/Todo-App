import express from "express";

const app = express();
app.use(express.json()); 

let todos = [
  { id: 1, text: "Learn Express", done: false },
  { id: 2, text: "Build todo app", done: false },
];

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the homepage"
    });
});

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.get("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({
         error: "Todo not found" 
        });
    }

    res.json(todo);
});

app.listen(5001, () => {
    console.log("Server running on port 5001");
});
import express from "express";
import { TodoListServices } from "./services/todoList-service.js";

const services = new TodoListServices();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app
  .route("/")
  .get((req, res) => {
    res.set("Content-Type", "application/json").send(services.getAllTodoList());
  })
  .post((req, res) => {
    const todo = req.body.todo;
    if (todo) {
      const result = services.createTodoList(todo);
      res.set("Content-Type", "application/json").send(result);
    } else {
      res.end("failed");
    }
  })
  .put((req, res) => {
    if (Object.keys(req.body)) {
      res
        .set("Content-Type", "application/json")
        .send(services.editTodoList(req.body));
    } else {
      res.send("failed");
    }
  })
  .delete((req, res) => {
    if (req.body.id) {
      res
        .set("Content-Type", "application/json")
        .send(services.deleteTodo(req.body.id));
    } else {
      res.send(req.body);
    }
  });

export default app;

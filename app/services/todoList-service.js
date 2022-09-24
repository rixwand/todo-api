export class TodoListServices {
  todoList = ["test 1", "test 2", "test 3"];

  getTodoJson() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todoList.map((todo, id) => {
        return { id, todo };
      }),
    });
  }

  getAllTodoList() {
    return this.getTodoJson();
  }

  createTodoList(data) {
    this.todoList.push(data);
    return this.getTodoJson();
  }

  editTodoList(data) {
    if (this.todoList[data.id]) {
      this.todoList[data.id] = data.todo;
      return this.getTodoJson();
    } else {
      return null;
    }
  }

  deleteTodo(id) {
    this.todoList.splice(id, 1);
    return this.getTodoJson();
  }
}

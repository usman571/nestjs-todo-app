import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos = []; // In-memory array to store todos

  getTodos() {
    return this.todos; // Return all todos
  }

  createTodo(title: string) {
    const todo = { id: Date.now(), title }; // Create a new todo
    this.todos.push(todo); // Add it to the array
    return todo; // Return the created todo
  }

  getTodoById(id: number) {
    return this.todos.find((todo) => todo.id === id); // Find a todo by ID
  }

  deleteTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index >= 0) {
      this.todos.splice(index, 1); // Remove todo from the array
      return { message: 'Todo deleted successfully' };
    }
    return { message: 'Todo not found' };
  }
}

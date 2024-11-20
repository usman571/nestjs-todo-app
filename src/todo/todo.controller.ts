import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos') // Base route: /todos
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get() // GET /todos
  getTodos() {
    return this.todoService.getTodos();
  }

  @Post() // POST /todos
  createTodo(@Body() body: { title: string }) {
    return this.todoService.createTodo(body.title);
  }

  @Get(':id') // GET /todos/:id
  getTodoById(@Param('id') id: number) {
    return this.todoService.getTodoById(Number(id));
  }

  @Delete(':id') // DELETE /todos/:id
  deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(Number(id));
  }
}

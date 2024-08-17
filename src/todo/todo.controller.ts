import { Body, Controller, Get, Post } from '@nestjs/common';
import { Todo } from './model';
import { randomUUID } from 'node:crypto';

@Controller('todos')
export class TodoController {
  private todoList = [];

  @Post()
  async addTodo(@Body() todo: Todo) {
    const id = randomUUID();
    this.todoList.push({ id, ...todo });
    return id;
  }

  @Get()
  async getTodos() {
    return this.todoList;
  }
}

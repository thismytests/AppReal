import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodoListItem } from './types';

@Controller('todolist')
export class TodolistController {
  public constructor(public TodolistService: TodolistService) {
  }

  @Get()
  getAllTasks(): Array<TodoListItem> {
    return this.TodolistService.getAllItems();
  }

  @Get(':id')
  getTaskById(@Param() params: { [id: string]: string }): TodoListItem {
    const { id } = params;
    return this.TodolistService.findItemById(id);
  }

  @Post()
  createTask(@Body() task: TodoListItem): TodoListItem {
    return this.TodolistService.addItem(task);
  }

  @Put(':id')
  updateTask(@Param('id') id: string,
             @Body() todolistItem: TodoListItem): TodoListItem {
    return this.TodolistService.updateItemById(id, todolistItem);
  }

  @Delete(':id')
  deleteTaskById(@Param('id') id: string): TodoListItem {
    return this.TodolistService.deleteItemById(id);
  }
}

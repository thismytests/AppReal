import { Test, TestingModule } from '@nestjs/testing';
import { TodolistService } from './todolist.service';
import { TodoListItem, TodoListItemNotRequired } from './types';

describe('TodolistService', () => {
  let service: TodolistService;

  let task: TodoListItem;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodolistService],
    }).compile();

    service = module.get<TodolistService>(TodolistService);

    task = {
      name: 'name',
      id: 'id',
      isSelected: false,
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('method `getAllItems` returns all tasks', () => {
    service['store'] = [task, task];
    expect(service.getAllItems().length).toBe(2);
  });

  it('method `addItem` add item to store', () => {
    service['store'] = [];
    service.addItem(task);
    expect(service['store'].length).toBe(1);
  });


  it('method `findItemBuId` return item from store', () => {
    const id = 'ID';
    task.id = id;

    service['store'] = [task];

    expect(service.findItemById(id).id).toBe(service['store'][0].id);
  });

  it('method `deleteItemById` should delete item  from store', () => {
    const id = 'ID';

    const task1 = JSON.parse(JSON.stringify(task));
    const task2 = JSON.parse(JSON.stringify(task));

    task1.id = id;

    service['store'] = [task1, task2];

    expect(service['store'].length).toBe(2);
    service.deleteItemById(id);
    expect(service['store'].length).toBe(1);
  });

  it('method `updateItemById` should delete item  from store', () => {
    const id = 'ID';

    task.id = id;
    task.name = null;
    task.isSelected = null;

    service['store'] = [task];

    const updatedData: TodoListItemNotRequired = {
      name: 'name',
      isSelected: true,
    };

    expect(service['store'][0]).toEqual(task);
    service.updateItemById(id, updatedData);

    expect(service['store'][0]).toEqual({ ...task, ...updatedData });
  });
});

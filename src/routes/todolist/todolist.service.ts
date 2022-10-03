import { Injectable } from '@nestjs/common';
import { TodoListItem, TodoListItemNotRequired } from './types';


@Injectable()
export class TodolistService {
  store: Array<TodoListItem> = [
    {
      id: '1664819317434',
      isSelected: true,
      name: 'name',
    },
  ];

  logger(operation: string) {
    console.log(`operation is:  `, operation);
    console.log(`this.store `, this.store);
  }

  getAllItems(): Array<TodoListItem> {
    return this.store;
  }

  findItemById(id: string): TodoListItem {
    const item: TodoListItem = this.store.find((item) => item.id === id);

    this.logger('findItemById');
    return item;
  }

  addItem(item: TodoListItemNotRequired): TodoListItem {
    const savedItem: TodoListItem = {
      id: String(+new Date() + Math.random()),
      ...item,
    };

    this.store.push(savedItem);

    this.logger('addItem');

    return savedItem;
  }

  deleteItemById(id: string): TodoListItem {
    const updatedStore: Array<TodoListItem> = [];
    let deletedItem: TodoListItem = null;

    for (let i = 0; i < this.store.length; i++) {
      const item = this.store[i];

      if (item.id != id) {
        updatedStore.push(item);
      }

      if (item.id == id) {
        deletedItem = item;
      }
    }

    this.store = updatedStore;
    this.logger('deleteItemById');
    return deletedItem;
  }

  updateItemById(id, data: TodoListItemNotRequired): TodoListItem {
    let updatedData: TodoListItem;
    this.store = this.store.map((item: TodoListItem) => {
      if (item.id == id) {
        item = { ...item, ...data };
        updatedData = item;
      }
      return item;
    });

    this.logger('updateItemById');

    return updatedData;
  }

}

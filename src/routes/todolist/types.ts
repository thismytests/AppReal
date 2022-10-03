export interface TodoListItemNotRequired {
  name?: string;
  isSelected?: boolean;
}

export interface TodoListItem extends TodoListItemNotRequired {
  id: string;
}
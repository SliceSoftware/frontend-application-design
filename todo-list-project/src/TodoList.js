import { TodoListItem } from './TodoListItem';
import v from './v';

export function TodoList(todoItems, updateItem) {

    const list = v('div', {
        className: 'TodoList', 
    })

    for(let i = 0; i < todoItems.length; i++) {
        const item = todoItems[i];
        item.toggleComplete = () => {
            item.complete = !item.complete;
            updateItem(i, item);
        }
        
        list.add(TodoListItem(item));
    }
    return list;
}
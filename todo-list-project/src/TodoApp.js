
import { TodoList } from './TodoList';
import { TodoListItemCreator } from './TodoListItemCreator';
import { VDOM } from './VirtualDom'
import './TodoApp.css';

const todoItems = [
    {complete: true, text: "This is complete"},
    {complete: false, text: "This is not complete"},
];

const addItem = (text) => {
    const item = {complete: false, text};
    todoItems.push(item);
    VDOM.refresh();
}

const updateItem = (i, item) => {
    todoItems[i] = item;
    VDOM.refresh();
}

function TodoApp() {
    const div = document.createElement('div');
    div.className = 'TodoApp';
    div.appendChild(TodoListItemCreator(addItem));
    div.appendChild(TodoList(todoItems, updateItem));
    return div;
}

export default TodoApp;
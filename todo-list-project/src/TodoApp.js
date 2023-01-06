
import { TodoList } from './TodoList';
import { TodoListItemCreator } from './TodoListItemCreator';
import { VDOM } from './VirtualDom'
import './TodoApp.css';
import v from './v';

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
    const app = v('div', {className: 'TodoApp'});
    app.add(TodoListItemCreator(addItem));
    app.add(TodoList(todoItems, updateItem));

    return app;
}

export default TodoApp;
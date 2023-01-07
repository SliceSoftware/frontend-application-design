
import { TodoList } from './TodoList';
import { TodoListItemCreator } from './TodoListItemCreator';
import { myUseState } from './VirtualDom'
import './TodoApp.css';
import v from './v';


function TodoApp() {

    const [todoItems, setTodoItems] = myUseState([]);

    const addItem = (text) => {
        const item = {complete: false, text};
        todoItems.push(item);
        setTodoItems(todoItems);
    }

    const updateItem = (i, item) => {
        todoItems[i] = item;
        setTodoItems(todoItems);
    }

    const app = v('div', {className: 'TodoApp'});
    app.add(TodoListItemCreator(addItem));
    app.add(TodoList(todoItems, updateItem));

    return app;
}

export default TodoApp;
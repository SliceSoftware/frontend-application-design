
import { TodoList } from './TodoList';
import { TodoListItemCreator } from './TodoListItemCreator';
import { myUseEffect, myUseState } from './VirtualDom'
import './TodoApp.css';
import v from './v';

function TodoApp() {

    const [todoItems, setTodoItems] = myUseState([]);

    // Calculate count of incomplete items to display in page title
    const notDone = todoItems.filter(i => !i.complete).length;

    // Effect will update page title. 
    myUseEffect(() => {
        document.title = `${notDone} things to do`;
    }, notDone);

    // Effect will focus the text field
    myUseEffect(() => {
        document.querySelector("input").focus();
    })

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
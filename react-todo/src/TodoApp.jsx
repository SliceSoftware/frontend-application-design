import React, {useState} from 'react';
import MainLayout from './layout/MainLayout';
import TodoListView from './views/TodoListView';
import './TodoApp.css';

const TodoApp = () => {

    const [listId, setListId] = useState(0);

    return (<MainLayout>
       {listId != null &&  <TodoListView listId={listId} />}
    </MainLayout>)
}

export default TodoApp;
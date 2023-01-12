import React, {useState} from 'react';
import MainLayout from './layout/MainLayout';
import TodoListView from './views/TodoListView';
import TodoListSelectionView from './views/TodoListSelectionView';
import './TodoApp.css';

const TodoApp = () => {

    const [listId, setListId] = useState(null);

    return (<MainLayout>
       {listId != null &&  <TodoListView listId={listId} back={()=>setListId(null)} />}
       {listId == null && <TodoListSelectionView selectList={(list) => setListId(list.id)} />}
    </MainLayout>)
}

export default TodoApp;
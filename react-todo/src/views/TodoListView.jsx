import React, {useState, useEffect } from 'react';

/* API Imports */
import TodoApi from '../api/TodoApi';

/* Material Imports */
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { Tooltip } from '@mui/material';
/* UI Imports */
import ListTitle from './ListTitle';
import TodoListItemView from './TodoListItemView';

const TodoListView = ({listId}) => {

    const [list, setList] = useState(null);

    const refreshList = async () => {
        setList(await TodoApi.getList(listId));
    }

    useEffect(() => {
        refreshList()
    }, [listId]);

    const addItemOnEnter = async (ev) => {
        if (ev.code == 'Enter') {
            await TodoApi.addItem(list.id, ev.target.value);
            refreshList();
            ev.target.value = "";
        }
    }

    const toggleItemComplete = async (item) => {
        item.toggleComplete();
        await TodoApi.updateItem(listId, item);
        refreshList();
    }

    return (
    <Paper sx={{marginX: 15, marginY: 5, minWidth: 250}} elevation={2}>
        {/* List is not defined */}
        {!list && <ListTitle>"No List Selected"</ListTitle>}

        {/* List is defined */}
        {list && <ListTitle>{list.name}</ListTitle>}

        {/* Input for adding items to list */}
        <Tooltip title="Type and press 'Enter' to add a new item" arrow>
            <TextField
                id="outlined-basic"
                label="Add an item to the list"
                variant="outlined"
                onKeyUp={addItemOnEnter}
                sx={{width:'95%', marginTop: '8px', padding: '4px 4px 4px p4x'}}
                autoFocus />
        </Tooltip>

        {list && list.items?.map(i => <TodoListItemView key={`listitem-${i.id}`} item={i} toggleItemComplete={() => toggleItemComplete(i)} />)}
    </Paper>
    )
}

export default TodoListView
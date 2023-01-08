import React from 'react';
import {ListItem} from '@mui/material';
import {ListItemButton} from '@mui/material';
import {ListItemText}  from '@mui/material';
import {ListItemIcon} from '@mui/material';

// icons
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const TodoListItemView = ({item, toggleItemComplete}) => {

    return(
        <ListItem divider>
            <ListItemButton onClick={toggleItemComplete}>
                <ListItemIcon>
                    {item.complete ? <TaskAltIcon /> : <RadioButtonUncheckedIcon />}
                </ListItemIcon>
                <ListItemText>
                    {item.text}
                </ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

export default TodoListItemView;

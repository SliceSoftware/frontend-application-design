import React, {useState, useEffect} from 'react';

import TodoApi from '../api/TodoApi';

import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import ListTitle from './ListTitle';

const TodoListSelectionView = ({selectList}) => {

    const [lists, setLists] = useState([])
    
    // True if the view is in a state where it is adding a list
    const [addingList, setAddingList] = useState(false);

    const refreshLists = async () => {
        setLists(await TodoApi.getAllLists());
    }

    const handleKeyUp = (ev) => {
        if (ev.code == 'Enter') {
            TodoApi.addList(ev.target.value).then(_ => {
                ev.target.value = ""
                setAddingList(false);
                refreshLists();    
            })
        } else if (ev.code == 'Escape') {
            setAddingList(false);
        }
    }
    useEffect(() => {
        refreshLists()
    }, [])

    return (
        <Grid spacing={3} sx={{margin: 7}} container>
        {lists && lists.map(l => 
            <Grid key={l.id} xs={12} sm={6} md={4}>
                <Button variant="contained" sx={{width: "100%"}} onClick={() => selectList(l)}>
                    <ListTitle>{l.name}</ListTitle>
                </Button>
            </Grid>    
        )}

        {!lists && 
            <Grid xs={12}>
                <Typography variant="h2">No Lists Found</Typography>
            </Grid>
        }

        {/** If adding a list, display text field */}
            <Grid xs={12}>
                {addingList && <TextField onKeyUp={handleKeyUp} autoFocus/>}
                {!addingList && <Button onClick={() => setAddingList(true)}>Add List</Button>}    
            </Grid>
        </Grid>
    );
}

export default TodoListSelectionView;
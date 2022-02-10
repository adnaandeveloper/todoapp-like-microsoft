import { BatteryCharging20Rounded } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import {
    AppBar,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField,
    Toolbar,
    Typography,
    Checkbox,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useStore } from '../store';
import InputFielAdd from './InputFielAdd';

const Item = () => {
    console.log('plus im from item component yees im her can you see mee now?');
    const { addTodo, removeTodo, toggleCompletedState, todos } = useStore();
    const [todoText, setTodoText] = useState('');
    const [plus, setPlus] = useState(false);
    console.log({ plus });
    const handleChange = (e: any, value: string) => {
        if (value) {
            setTodoText(value);
        }
        if (e.key === 'Enter') {
            setPlus((prevPlus) => !prevPlus);
        }
    };

    return (
        <>
            <InputFielAdd />
            <div style={{ display: 'inline-grid' }}>
                <FormGroup>
                    {todos.map((todo) => (
                        <FormControlLabel
                            control={<Checkbox />}
                            label={todo.description}
                        />
                    ))}
                </FormGroup>
            </div>
        </>
    );
};

export default Item;

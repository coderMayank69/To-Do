import ListItem from '@mui/material/ListItem';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = e => setText(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return; // don't add empty todos
        addTodo(trimmed);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <TextField
                    label="Add Todo"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="create todo" edge="end" type="submit">
                                    <CreateIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    )
}

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

export default function TodoItem({ todo, toggle, removeTodo }) {
    const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onChange={toggle}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={todo.title} />
            </ListItemButton>
          </ListItem>
        );
}
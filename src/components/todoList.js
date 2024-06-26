import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, ListItemSecondaryAction, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 2 }}>
      <TextField
        label="Новая задача"
        variant="outlined"
        fullWidth
        margin="normal"
        value={task}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddTask}
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        Добавить задачу
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ border: '1px solid #ddd', marginBottom: 1, borderRadius: 2 }}>
            <ListItemText primary={task} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;

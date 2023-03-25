import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ResultsList() {
  const [results, setResults] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3310/drugstore')
      .then((response) => {
        console.log(response.data);
        setResults(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!results || results.length === 0) return (null)

  else {
    return (
      <Box sx={{ flexGrow: 1, maxWidth: 900 }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Results :
        </Typography>
        <List>
          {results.map((drugstore) => (
            <ListItem
              key={drugstore.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={drugstore.name} />
              <ListItemText secondary={drugstore.address} />
              <ListItemText secondary={drugstore.distance} />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
}

import { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';

export default function Rechercher() {
  const [query, setQuery] = useState("");

  const handleSubmit = async () => {
    console.log(query)
    const ville = query.toString().toLowerCase();
    const url = "http://localhost:3310/";

    console.log(ville)

    const villeCoordonnees = (ville === 'paris' ? [48.870182, 2.356464] : [0, 0]);
    console.log(villeCoordonnees)
    try {
      await axios.post(url, { coordonnees: villeCoordonnees },)
        .then(response => console.log(response.status))
    }
    catch (error) {
      console.warn(error)
    }
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="search"
          type="text"
          variant="outlined"
          label="Rechercher"
          onChange={(e) => setQuery(e.current.value)}
          InputProps={{
            position: 'end',
            endAdornment: (
              <IconButton color="primary" aria-label="search" onClick={handleSubmit}>
                <SearchIcon />
              </IconButton>)
          }}
        />
      </Box>
    </div >
  );
}

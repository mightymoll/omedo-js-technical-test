import { useState } from 'react';
import { Box, IconButton, InputLabel, FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';


export default function Rechercher() {
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    setQuery(event.target.value);

    try {
      const coordinates = await axios.get(`http://api.positionstack.com/v1/forward?access_key=e9c9c032ec1cbcd5eb32d1e6a1e53633&query=${query}`)
        .then(response => {
          console.log(response.data)
          return [response.data.longitude, response.data.latitude]
        })
      const otherPoint = coordinates
      axios.put("http://localhost:3310/drugstore", otherPoint)
    }
    catch (error) {
      console.log(error)
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
        <FormControl>
          <InputLabel htmlFor="component-outlined">Rechercher</InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue="Paris"
            label="Name"
            value={query}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton color="primary" aria-label="search" onClick={handleSubmit}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>)
            }}
          />
        </FormControl>
      </Box>
    </div>
  );
}

import * as React from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import seedPhoto from "../assets/Seed.png";

function NameYourPlant() {
  const [plantName, setPlantName] = useState("");
  const [plantGender, setPlantGender] = useState("");
  const [task, setTasks] = useState([]);

  const handleNameChange = (event) => {
    setPlantName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setPlantGender(event.target.value);
  };

  const photoStyling = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <Container sx={{ padding: "5px" }}>
      <Typography sx={{ color: "072E3E", fontSize: "30px" }}>
        Name your plant:
      </Typography>
      <Box display="flex" alignItems={"center"} justifyContent={"center"}>
        <TextField label="Name" value={plantName} onChange={handleNameChange} />
        <FormControl fullWidth>
          <InputLabel id="simple-select-label">Gender</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={plantGender}
            label="Gender"
            onChange={handleGenderChange}
          >
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Non-Binary"}>Non Binary</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box alignItems={'center'}>
        <Box align='center' sx={{padding: 2,backgroundColor: 'E2F1F8'}}>
          <Typography align='left'>
            Choose a task(s) to accomplish everyday to help me grow!
          </Typography>
        </Box>
        <img src={seedPhoto} alt="" style={photoStyling} />
      </Box>
      <Box>{/* tasks */}
        {/* get tasks and map into component */}
      </Box>
    </Container>
  );
}

export default NameYourPlant;

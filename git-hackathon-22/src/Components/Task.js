import * as React from 'react';
import { Box, Typography } from "@mui/material";

function Task(props) {

 return (
    <Box>
        <Typography>{props.task}</Typography>
    </Box>

)
}

export default Task;
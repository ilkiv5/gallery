import React from 'react';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Buttons = () => {
    return (
        <Stack direction="row" spacing={2} style={{marginTop:"20px"}}>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
        </Stack>
        )

};

export default Buttons;
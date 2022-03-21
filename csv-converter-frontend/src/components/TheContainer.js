import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
// import { styled } from "@mui/material";

function TheContainer() {
  return (
    <div>
      {/* <Container maxWidth="sm" /> */}
      <h1>Container</h1>
      <Container maxWidth="md">
        {/* <placeholder="Paste CSV Here"> */}
        <TextField
          id="outlined-basic"
          placeholder="Paste Your CSV Here "
          variant="outlined"
        />
        <Button variant="contained">Download</Button>
      </Container>
    </div>
  );
}

export default TheContainer;

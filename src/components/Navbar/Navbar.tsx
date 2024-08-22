import { Stack } from "@mui/material";
import Button from "../Button";

export default function Navbar() {
  return (
    <Stack spacing={2}>
      <h2>Ryan Deisler</h2>
      <Button>Home</Button>
      <Button>About</Button>
      <Button>Contact Me</Button>
    </Stack>
  );
}

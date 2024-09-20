import { Stack, Typography } from "@mui/material";
import Button from "@/components/Button";

function clickHandler() {
  console.log(document.URL);
}

export default function Navbar() {
  return (
    <Stack spacing={2} className="text-center min-w-fit">
      <Typography variant="h6">Ryan Deisler</Typography>
      <Button>Home</Button>
      <Button onClick={clickHandler}>Projects</Button>
      <Button>Contact Me</Button>
    </Stack>
  );
}

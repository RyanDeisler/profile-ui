import { Stack, Typography } from "@mui/material";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <Stack spacing={2} className="text-center min-w-fit">
      <Typography variant="h6">Ryan Deisler</Typography>
      <Button>Home</Button>
      <Button>Projects</Button>
      <Button>Contact Me</Button>
    </Stack>
  );
}

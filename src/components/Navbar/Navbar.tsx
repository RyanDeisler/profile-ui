import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <Stack spacing={2} className="text-center min-w-fit">
      <Typography variant="h6">Ryan Deisler</Typography>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contactme">Contact Me</Link>
    </Stack>
  );
}

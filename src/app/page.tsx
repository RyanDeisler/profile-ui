import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import profilePic from "../assets/self.png";
export default function Home() {
  return (
    <Stack className="w-full p-8 items-center" spacing={2}>
      <Image
        className="justify-self-center"
        src={profilePic}
        alt="Picture of Ryan"
        width={150}
        height={150}
      ></Image>
      <Typography variant="h2">Professional Frontend Developer</Typography>
    </Stack>
  );
}

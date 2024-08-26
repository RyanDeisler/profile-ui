import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import profilePic from "../assets/self.png";
export default function Home() {
  return (
    <Stack className="p-8 justify-center" spacing={2}>
      <Image
        src={profilePic}
        alt="Picture of Ryan"
        width={150}
        height={150}
      ></Image>
      <Typography variant="h2">Aspiring Full Stack Developer</Typography>
    </Stack>
  );
}

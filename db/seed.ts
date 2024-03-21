import { Comment, db } from "astro:db";

export default async function seed() {
  await db.insert(Comment).values([
    {
      author: "Sponge Bob",
      body: "lolololol!",
    },
    {
      author: "Patrick Star",
      body: "durhur!",
    },
  ]);
}

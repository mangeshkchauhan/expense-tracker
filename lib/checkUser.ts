import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const checkUser = async () => {
  const user = await currentUser();

  //check for current logged in clerk user
  if (!user) {
    return null;
  }

  //check if user exists in db
  const userInDb = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (userInDb) {
    return userInDb;
  }

  //if user doesn't exist in db, create user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: user.fullName,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
}
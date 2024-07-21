"use server";

import { db } from "@/lib/db";
import { Transaction } from "@/types/Transactions";
import { auth } from "@clerk/nextjs/server";

async function getTransactions(): Promise<{
  transactions?: Transaction[];
  error?: string;
}> {
  const { userId } = auth();
  if (!userId) {
    return {
      error: "User not found",
    };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      transactions,
    };
  } catch (error) {
    return {
      error: "Error fetching transactions",
    };
  }
}

export default getTransactions;

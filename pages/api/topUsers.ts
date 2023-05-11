import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

async function getTopUsers(limit = 5) {
    const topUsers = await prismadb.user.findMany({
        take: limit,
        orderBy: {
            highScore: "desc",
        },
        select: {
            id: true,
            name: true,
            highScore: true,
        },
    });

    return topUsers;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        const topUsers = await getTopUsers(10);
        res.status(200).json(topUsers);
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

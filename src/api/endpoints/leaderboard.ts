// api/endpoints/timer.ts
import client from "@api/client";

export interface LeaderboardEntry {
    "GameId": string;
    "GameVersion": string;
    "LeaderboardGameVersion": string;
    "QueueName": string;
    "TimeScope": string;
    "DateFrom": string;
    "DateTo": string;
}

export const fetchLeaderboard = async () => {
    const { data } = await client.get("elympics/leaderboard/");
    return data;
};

// api/endpoints/streamlitLeaderboard.ts

import client from "@api/client";

export interface StreamlitLeaderboardEntry {
    userId: string;
    matchId: string;
    position: number;
    points: number;
    endedAt: string;
}

export interface StreamlitNicknameEntry {
    elympics_user_id: string;
    nickname: string;
}

export interface StreamlitLeaderboardResponse {
    data: StreamlitLeaderboardEntry[];
    nicknames: StreamlitNicknameEntry[];
}

export const fetchStreamlitLeaderboard = async (): Promise<StreamlitLeaderboardResponse> => {
    const response = await client.get<StreamlitLeaderboardResponse>('elympics/leaderboard/streamlit-leaderboard');
    return response.data;
};

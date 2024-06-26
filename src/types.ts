interface SlackImagesType {
  image_48: string;
  image_72: string;
  image_192: string;
  image_512: string;
}

interface UserInfoType {
  userId: string;
  name: string;
  displayName: string;
  images: SlackImagesType;
}

export interface ScoreAndUserType {
  score: number | undefined;
  userId: string;
  name: string;
  displayName: string;
  images: SlackImagesType;
}

export interface MonthlySummaryType {
  [datekey: string]: ScoreAndUserType[];
}
export interface ScoreTodayType extends ScoreAndUserType {}

export type Results = {
  channelName: string;
  winnerYesterday: ScoreAndUserType[] | null;
  scoreToday: ScoreAndUserType[] | null;
  monthlySummary: MonthlySummaryType;
  topPerformersAllTime: ScoreAndUserType[];
  usersInfo: UserInfoType[];
};

export type GetChannelData = {
  channelData: Results;
};
export type FetchChannelData = {
  channelData: Results | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: ErrorResponse;
};

export interface ErrorResponse {
  message: string;
  details?: string | string[] | undefined;
}

export interface LeaderboardAuthentication {
  channelId: string;
  channelName: string;
  authenticated: boolean;
  authToken: string;
}
export interface AuthentificationResponse {
  authentification: string;
  authToken: string;
  channelName: string;
  channelId: string;
}

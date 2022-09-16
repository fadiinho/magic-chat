export interface IUser {
  userId: string;
  username: string;
  profilePicture?: string;
}

export interface IMessage {
  id: string;
  userId: string;
  content: string;
  timestamp: number;
}

export type TUsersUpdate = { user: IUser; messages: IMessage[] }[];

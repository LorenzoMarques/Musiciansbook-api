export interface IChat {
  user_one: string;
  user_two: string;
}

export interface IPostChat {
  from: string;
  to: string;
  text: string;
}

export interface ISocketUsers {
  socketId: string;
  userId: string;
}

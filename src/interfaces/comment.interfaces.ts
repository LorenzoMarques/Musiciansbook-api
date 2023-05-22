export interface ICreateComment {
  user_id: string;
  post_id: string;
  comment: string;
}

export interface IListComment {
  post_id: string;
  page: string;
}

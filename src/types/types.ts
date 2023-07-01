export interface ICard {
  id?: number;
  name: string;
  isDone: boolean;
  createAt: string;
  deadline?: string;
  description?: string;
}

export interface CardProps {
  card: ICard;
  changeStatusHandler(card: ICard): void;
  deleteHandler(card: ICard): void;
}

export interface CreateCardFormProps {
  submitHandler(arr: ICard): void;
}
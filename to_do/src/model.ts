export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface Profile {
  name: string;
  description: string;
  website?: string;
  skills: string[];
}

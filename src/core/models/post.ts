import { types } from "../enums/types.ts";

export interface IPostSection {
  id: number;
  section?: {
    type: types;
    content: string;
    attributes: string[];
    alt?: string;
  };
}

export interface IPost {
  title: string;
  author: string;
  content: IPostSection[];
  createdAt: string;
  updatedAt?: string;
}

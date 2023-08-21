interface IPostSection {
  id: number;
  text?: {
    content: string;
    attributes: string[];
  };
  image?: {
    content: string;
    attributes: string[];
  };
}

export interface IPost {
  title: string;
  author: string;
  content: IPostSection[];
  createdAt: string;
  updatedAt?: string;
}

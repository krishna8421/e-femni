export interface Post {
  meta: {
    shortTitle: string;
    shortDescription: string;
    author: string;
    dateCreated: Date;
    id: number;
    slug: string;
  };
  imgUrl?: string;
  title: string;
  content: string;
}

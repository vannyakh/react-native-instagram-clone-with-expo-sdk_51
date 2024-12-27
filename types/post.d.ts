//  post types

import { User } from "./user";

export interface Post {
  id: string;
  title: string;
  body: string;
  published: boolean;   
  createdAt: string;
  updatedAt: string;
}

export interface Meta {
   title: string;
   description: string;
   cover: string;
   date: string;
   category: string;
   tags: string[];
   slug: string;
}

export interface IProject {
   content: string;
   meta: Meta;
}
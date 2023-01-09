export interface Meta {
   title: string;
   description: string;
   coverPath: string;
   date: string;
   category: string;
   tags: string[];
   slug: string;
   previewURL: string;
   repo: string;
}

export interface IProject {
   content: string;
   meta: Meta;
}
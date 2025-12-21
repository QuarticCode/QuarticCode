export type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export type UiProject = {
  project: Project;
  style: string;
};

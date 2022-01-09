interface IProject {
  img: Image;
  title: string;
  stack?: Technology[];
  description: string[];
  links: SourceLinks;
}

type Image = {
  url: string;
  alt: string;
};

type Technology = {
  name: string;
  icon: JSX.Element;
};

type SourceLinks = {
  site: string;
  github: string;
};

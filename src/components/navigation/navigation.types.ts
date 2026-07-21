export type NavigationChild = {
  id: string;
  label: {
    id: string;
    en: string;
  };
  href: string;
  description?: {
    id: string;
    en: string;
  };
};

export type NavigationItem = {
  id: string;
  label: {
    id: string;
    en: string;
  };
  href?: string;
  children?: NavigationChild[];
};

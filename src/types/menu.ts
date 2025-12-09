export type SubmenuItem = {
    path: string;
    label: string;
    href: string;
  };    
  
  export type HeaderItem = {
    label: string;
    href: string;
    submenu?: SubmenuItem[];
  };
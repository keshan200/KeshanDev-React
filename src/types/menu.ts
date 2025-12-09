export type SubmenuItem = {
    path: ReactNode;
    label: string;
    href: string;
  };    
  
  export type HeaderItem = {
    label: string;
    href: string;
    submenu?: SubmenuItem[];
  };
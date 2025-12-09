import type { HeaderItem } from "../../../types/menu";


export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Blog",
    href: "/blog",
    submenu: [
      {
        label: "Blog list", href: "/blog",
        path: undefined
      },
      {
        label: "Blog details", href: "/blog/Blog_1",
        path: undefined
      },
    ],
  },
  { label: "Contact", href: "/contact" },
 
];  
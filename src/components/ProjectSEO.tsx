import { useEffect } from "react";

type Props = {
  title: string;
  metaDescription?: string;
  keywords?: string[];
};

export default function ProjectSEO({ title, metaDescription, keywords }: Props) {
  useEffect(() => {
    document.title = `${title} | Arte y Dimensiones`;
    const md = document.querySelector('meta[name="description"]');
    if (md && metaDescription) md.setAttribute("content", metaDescription);
    const kw = document.querySelector('meta[name="keywords"]');
    if (kw && keywords?.length) kw.setAttribute("content", keywords.join(", "));
  }, [title, metaDescription, keywords]);

  return null;
}

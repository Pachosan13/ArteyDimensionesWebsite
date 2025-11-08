export interface Project {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  roi: string;
  description: string;
  keywords: string[];
  metaDescription: string;
  gallery: string[];
}

export const projects: Project[] = [];

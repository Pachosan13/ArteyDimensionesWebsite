import React from "react";

type Props = {
  title: string;
  category: string;
  image: string;
  tagline?: string;
};

const ProjectHero: React.FC<Props> = ({ title, category, image, tagline }) => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden" aria-labelledby="project-hero-title">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,15,15,0.25), rgba(15,15,15,0.65) 70%, rgba(15,15,15,0.9))",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="inline-flex flex-col gap-3 rounded-3xl bg-black/45 backdrop-blur px-6 py-6 max-w-2xl">
          <div className="text-brand text-xs font-semibold tracking-[0.4em] uppercase">{category}</div>
          <h1
            id="project-hero-title"
            className="text-white font-bold leading-tight text-[clamp(2rem,4vw,3.25rem)]"
          >
            {title}
          </h1>
          {tagline && <p className="text-white/80">{tagline}</p>}
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;

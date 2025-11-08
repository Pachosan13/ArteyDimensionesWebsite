import React from "react";

type Props = {
  title: string;
  category: string;
  image: string;
  tagline?: string;
};

const ProjectHero: React.FC<Props> = ({ title, category, image, tagline }) => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,15,15,0.25), rgba(15,15,15,0.65) 70%, rgba(15,15,15,0.8))",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="inline-block rounded-2xl bg-black/40 backdrop-blur px-6 py-5">
          <div className="text-brand text-sm font-semibold tracking-wide uppercase"> {category} </div>
          <h1 className="mt-1 text-white font-bold leading-tight text-[clamp(1.8rem,4.5vw,3.2rem)]">
            {title}
          </h1>
          {tagline && <p className="text-white/85 mt-2">{tagline}</p>}
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;

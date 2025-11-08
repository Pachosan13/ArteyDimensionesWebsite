import React from "react";

type ServiceHeroProps = {
  imageSrc: string;
  imageAlt?: string;
};

const ServiceHero: React.FC<ServiceHeroProps> = ({
  imageSrc,
  imageAlt = "Imagen del servicio",
}) => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
};

export default ServiceHero;
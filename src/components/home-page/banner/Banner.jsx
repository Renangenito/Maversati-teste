import { Link } from "react-router-dom";
import "./Banner.css";
import React, { useEffect, useState } from "react";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Elegância e estilo definem a Maversati",
      subtitle:
        "Explore a coleção Maversati e mergulhe em um mundo de estilo e sofisticação. Encontre roupas exclusivas que capturam sua essência e elegância em cada ocasião.",
      image: "/images/img-banner-cards/banner1-homepage.png",
      btn: "true",
    },
    {
      title: "Retrô e Estiloso",
      subtitle:
        "Em comemoração aos 3 anos da marca, nós preparamos uma coleção exclusiva para comemorar esse momento! O Vintage vem com tudo! Acompanhe todo o processo de criação lá na rede do lado.",
      image: "/images/img-banner-cards/banner2-homepage.jpg",
      btn: "false",
    },
    {
      title: "Moda Consciente",
      subtitle:
        "A Maversati se preocupa, em todos os processos de produção, com a sustentabilidade. Por isso nossos produtos são feitos com materias eco-friendly, buscando reutilizar itens que seriam descartados.",
      image: "/images/img-banner-cards/banner3-homepage.png",
      btn: "true",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="banner-content">
            <p className="title-content">{slide.title}</p>
            <p className="subtitle-content">{slide.subtitle}</p>
            {slide.btn !== "false" && (
              <div>
                <Link to={"/shop"}>
                  <button type="button" className="btn-carousel">
                    Compre Agora
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

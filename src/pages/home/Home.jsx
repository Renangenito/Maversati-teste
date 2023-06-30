import Footer from "../../components/footer/Footer";
import Banner from "../../components/home-page/banner/Banner";
import CardMiddle1 from "../../components/home-page/card-middle1/CardMiddle1";
import CardMiddle2 from "../../components/home-page/card-middle2/CardMiddle2";
import CardMiddle3 from "../../components/home-page/card-middle3/CardMiddle3";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import React from "react";

export default function Home() {
  return (
    <div className="home-page">
      <header className="navbar">
        <Navbar />
      </header>
      <div className="banner">
        <Banner />
      </div>
      <CardMiddle1
        title="Coleção Outono-Inverno"
        subtitle="Descubra a coleção Outono-Inverno da Maversati:
          Estilo e Elegância ao seu alcance. Peças modernas e sofisticadas criam um visual impecável
          para os dias frios."
      />
      <CardMiddle2
        title="Moda Consciente"
        subtitle="Nossas coleções refletem nosso compromisso com práticas sustentáveis e responsáveis. Encontre roupas elegantes, feitas com materiais eco-friendly, produzidas de forma ética."
      />
      <CardMiddle3
        titleCard3="Mais Vendidos"
        subTitleCard3="Os queridinhos da Maversati em todas as coleções!"
      />
      <div className="aboutus-container">
        <p className="title-aboutus">Sobre Nós</p>
        <p className="subtitle-aboutus">
          Fundada pela jovem empreendedora Marina Moraes, nascida na cidade de Pereiras - SP, a
          Maversati é uma marca que expressa estética, elegância, conforto e sustentabilidade.
          Acreditamos que a moda pode ser mais do que apenas belas peças de roupa; ela também pode
          ser uma plataforma para a conscientização ecológica.
        </p>
        <p className="subtitle-aboutus">
          Comprometidos em promover uma moda consciente e responsável, nossas coleções são
          cuidadosamente selecionadas, priorizando materiais eco-friendly e práticas de produção
          éticas. Buscamos oferecer roupas que não apenas elevam seu estilo, mas também alinham-se
          aos valores de sustentabilidade que são tão importantes para nós.
        </p>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

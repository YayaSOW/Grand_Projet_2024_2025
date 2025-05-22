import Lottie from "lottie-react";
import FarmerAnimation from "../../../src/assets/lotti-animation/woman-framer.json";
import ServiceCard from "../../../src/components/reusables/ServiceCard";

const servicesData = [
  {
    id: 1,
    title: "Crème Glacée Naturelle",
    description:
      " Plongez dans l’univers gourmand de nos crèmes glacées 100 % naturelles, élaborées à partir de fruits frais rigoureusement sélectionnés dans des vergers locaux. Chaque parfum est conçu sans colorants artificiels, sans additifs chimiques et sans conservateurs, afin de préserver toute la pureté et la richesse des saveurs authentiques.",
    image: "/images/me/made.png",
    color: "bg-[#FFA1A1]",
    textColor: "#3DBE3D",
  },
  {
    id: 2,
    title: "Des Crereales",
    description:
      "Découvrez nos céréales artisanales “Made in Sénégal”, spécialement formulées pour combiner plaisir gustatif et bienfaits nutritionnels. Fabriquées à partir de grains locaux (mil, sorgho, maïs et niébé) soigneusement torréfiés et moulus, nos céréales offrent une richesse en fibres, protéines végétales et vitamines essentielles.",
    image: "/images/me/2/cereales.png",
    color: "bg-[#A8E4A0]",
    textColor: "#FF5252",
  },
  {
    id: 3,
    title: "Pate",
    description:
      "Plongez dans l’art culinaire avec notre vaste gamme de pâtes artisanales, produites avec des farines de blé dur premium et de l’eau de source pure. De la spaghetti traditionnelle aux penne rigate en passant par les tagliatelles, chaque forme est extrudée lentement au bronze, puis doucement séchée à basse température pour préserver l’amidon et garantir une tenue parfaite à la cuisson.",
    image: "/images/me/patte.png",
    color: "bg-[#A0C7FF]",
    textColor: "#FF9500",
  },
  {
    id: 4,
    title: "Fruits Séché",
    description:
      "Savourez l’intensité et la concentration des saveurs avec notre sélection de fruits séchés, issus des meilleurs vergers et cueillis à maturité optimale. Abricots moelleux, mangues fondantes, ananas délicatement sucrés et baies de goji gorgées d’antioxydants : chaque fruit est séché lentement, sans ajout de sucre ou de sirop, pour conserver toutes ses qualités nutritives et son goût naturel.",
    image: "/images/me/2/man_sec.png",
    color: "bg-[#FFD79E]",
    textColor: "#0077B6",
  }
];

const ServicesContainer = () => {
  return (
    <div
      id="services"
      className="container-padding grid grid-cols-1 xl:grid-cols-2 py-4 gap-4 bg-[#e3e4e7]"
    >
      <div className="py-6">
        <div className="flex flex-col sm:flex-row-reverse xl:flex-col items-center gap-4 relative">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-textColor font-black text-center">
           Offrir la <span className="text-[#19b358]">fraîcheur</span> et le{" "}
  <span className="text-[#19b358]">naturel</span> à chaque bouchée : Nos{" "}
  <span className="text-[#19b358]">glaces</span> et produits, votre{" "}
  <span className="text-[#19b358]">plaisir</span> au quotidien
          </h1>
          <Lottie className="max-sm:h-40" animationData={FarmerAnimation} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        {servicesData.map((data) => {
          return (
            <ServiceCard
              key={data.id}
              title={data.title}
              description={data.description}
              image={data.image}
              bgColor={data.color}
              textColor={data.textColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesContainer;

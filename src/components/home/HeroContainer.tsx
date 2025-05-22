import Button from "../reusables/Button";
import { NavHashLink } from "react-router-hash-link";

const heroData = [
  {
    id: 1,
    imageUrl: "/images/me/pot1.png",
    title: "Glaces",
    description: "Chocolate & Vanilla",
    price: "5.0",
  },
  {
    id: 2,
    imageUrl: "/images/me/2/cer.png",
    title: "Cereales",
    description: "Mil-Mais-Fonio",
    price: "3.0",
  },
  {
    id: 3,
    imageUrl: "/images/me/patte.png",
    title: "Pates",
    description: "Pate Ditakh",
    price: "2.5",
  },
  {
    id: 4,
    imageUrl: "/images/me/2/man_sec.png",
    title: "Fruits Séchés",
    description: "Mangue sechée",
    price: "5.0",
  },
];

const HeroContainer = () => {
  return (
    <div
      id="hero"
      className="container-padding grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4"
    >
      <div className="flex flex-col items-start  justify-center gap-4 md:gap-6">
        <div className="flex items-center gap-3 bg-primary p-2 rounded-full">
          <p className="text-lg font-base text-white">Fastest Delivery</p>
          <div className="rounded-full w-9 h-9 bg-white">
            <img
              src="/images/hero/delivery.png"
              className="object-cover w-full h-full rounded-full"
              alt="Delivery Image"
            />
          </div>
        </div>
        <p className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-wide text-headingColor">
           Savourez la Fraîcheur en <span className="text-[#19b358]">Quelques Minutes.</span>
        </p>
        <p className="font-medium text-base xl:text-lg">
           Bienvenue chez <span className="font-semibold">La Maison de la Creme Glacée</span>, votre référence en ligne pour des{" "}
          <span className="font-semibold"> glaces artisanales</span> 100 % naturelles ! 
  Nous vous proposons une sélection exquise de crèmes glacées aux fruits frais, 
  fabriquées sans colorants ni conservateurs, livrées directement à votre porte pour un pur moment de bonheur.

        </p>

        <Button className="w-full xl:w-[500px] p-0" size="lg">
          <NavHashLink to="/#slider-container" className="w-full h-full py-3">
            Order Now
          </NavHashLink>
        </Button>
      </div>
      <div className="relative">
        <img
          className="w-full h-auto max-h-[550px] md:w-3/4 md:h-full absolute top-0 right-0"
          src="/images/hero/hero-bg.png"
          alt="Hero Background"
        />
        <div className="w-full md:w-[90%] xl:w-3/4 h-full relative z-10 py-12 grid grid-cols-2 gap-y-14 gap-x-4 sm:gap-x-10 px-4 sm:px-10 md:px-0">
          {heroData.map((item) => {
            return (
              <div
                key={item.id}
                className="group bg-gray-300/50 shadow-xl backdrop-blur-md flex flex-col gap-1 items-center cursor-pointer rounded-xl py-2"
              >
                <img
                  className="group-hover:scale-110 transition duration-200  w-40 h-40 object-contain drop-shadow-2xl  -mt-12"
                  src={item.imageUrl}
                  alt="Icecreame Image"
                />
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600 text-sm text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;

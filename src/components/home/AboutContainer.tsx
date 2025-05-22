const AboutContainer = () => {
  return (
    <div
      id="about"
      className="container-padding flex flex-col gap-8 w-full pt-6"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full items-center gap-2 xs:gap-4 md:gap-10">
        {/* Vidéo YouTube */}
        <div className="overflow-hidden rounded-md">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/jkBxa08oU9U?start=2&autoplay=1&mute=1&loop=1&playlist=jkBxa08oU9U"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="md:px-4 flex flex-col gap-10 relative">
          <img
            className="z-[-1] rotate-12 w-80 opacity-75 aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src="/images/about/orange-seller.png"
            alt=""
          />
          <div className="col-span-3 text-start flex flex-col gap-2">
            <p className="text-base relative w-fit sm:text-2xl md:text-4xl text-textColor font-semibold">
              🧊 À propos de notre entreprise
              <span className="absolute bottom-0 right-0 w-3/4 h-[2px] bg-textColor"></span>
            </p>
            <p className="text-xxs sm:text-xs md:text-base">
              Chez <span className="font-semibold">La Masión de Glace</span>, nous croyons que le plaisir peut rimer avec naturel. C’est pourquoi nous avons choisi de proposer des crèmes glacées artisanales, préparées à partir de fruits frais, de lait de qualité et sans aucun additif chimique. Notre mission est simple : offrir des moments de fraîcheur, de gourmandise et de bien-être, en respectant à la fois votre santé et l’environnement.
            </p>
          </div>

          <div className="text-start mt-0">
            <p className="relative w-fit text-base sm:text-2xl md:text-4xl text-textColor font-semibold">
              🍓 Notre histoire
              <span className="absolute bottom-0 right-0 w-3/4 h-[2px] bg-textColor"></span>
            </p>
            <p className="text-xxs sm:text-xs md:text-base mt-2">
              Tout a commencé avec une envie : redonner ses lettres de noblesse à la crème glacée, souvent trop sucrée ou industrielle. En 2023, nous avons lancé notre première gamme de glaces aux fruits 100 % naturels, fabriquées à la main dans notre atelier. Depuis, notre aventure s’écrit chaque jour avec des producteurs locaux, des recettes originales et des clients fidèles qui partagent notre amour du vrai goût.
            </p>
          </div>

          <div className="text-start">
            <p className="relative w-fit text-base sm:text-2xl md:text-4xl text-textColor font-semibold">
              🌱 Nos engagements
              <span className="absolute bottom-0 right-0 w-3/4 h-[2px] bg-textColor"></span>
            </p>
            <p className="text-xxs sm:text-xs md:text-base mt-2">
              Nous privilégions les ingrédients locaux et de saison, travaillés dans le respect des normes d’hygiène et des méthodes artisanales. Notre production est écoresponsable : zéro gaspillage, emballages recyclables, circuits courts. Chaque parfum est conçu pour être à la fois gourmand et équilibré, afin que chacun puisse se faire plaisir sans compromis.
            </p>
          </div>

          <div className="text-start">
            <p className="relative w-fit text-base sm:text-2xl md:text-4xl text-textColor font-semibold">
              🍦 De la fabrication à la dégustation
              <span className="absolute bottom-0 right-0 w-3/4 h-[2px] bg-textColor"></span>
            </p>
            <p className="text-xxs sm:text-xs md:text-base mt-2">
              Nos crèmes glacées sont préparées avec soin, puis vendues en boutique ou livrées à domicile, prêtes à être savourées. Que ce soit pour un dessert, un événement ou simplement un moment de douceur, nos produits vous accompagnent dans toutes vos envies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ItemsSlider from "../reusables/ItemsSlider";

const SliderContainer = () => {
  const items = useSelector((state: RootState) => state.items.items);
  const fruits = items?.filter((item) => item.category === "glaces");
  const rices = items?.filter((item) => item.category === "cereales");
  return (
    <div id="slider-container" className="container-padding">
      {fruits && fruits.length > 0 && (
        <ItemsSlider items={fruits} title="Glaces" />
      )}
      {rices && rices?.length > 0 && (
        <ItemsSlider items={rices} title="Cereales" />
      )}
    </div>
  );
};

export default SliderContainer;

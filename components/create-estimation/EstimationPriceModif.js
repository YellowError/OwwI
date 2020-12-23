import React from "react";
import InputPrice from "../for-all-form/InputPrice";
import InputSwitch from "../for-all-form/InputSwitch";
import ButtonExtra from "./ButtonExtra";
import CommentArea from "../CommentArea";
const EstimationPriceModif = ({ hidden }) => {
  return (
    <div className={hidden}>
      <h2>Modification du prix</h2>
      <InputPrice label="Prix du m²" idfor="areaPrice" isRequired={true} />
      <InputPrice
        label="Prix du terrain constructible/m²"
        idfor="buildableAreaPrice"
        isRequired={true}
      />
      <InputPrice
        label="Prix du terrain non-constructible/m²"
        idfor="nonBuildableAreaPrice"
        isRequired={true}
      />
      <h3>Extras</h3>
      <ButtonExtra />
      <CommentArea label="votre commentaire" forId="comStep9" />
    </div>
  );
};
export default EstimationPriceModif;

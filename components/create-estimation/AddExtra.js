import React from "react";
import FloatingInput from "../floatingInput";
const AddExtra = () => {
  return (
    <>
      <FloatingInput label="Nom de l'extra" htmlForAndId="extra" />
      <div className="flex justify-between">
        <select>
          <option>Positive</option>
          <option>Négative</option>
        </select>
        <FloatingInput
          className="w-6/12"
          label="Estimation prix en €"
          htmlForAndId="prixExtra"
        />
      </div>
    </>
  );
};
export default AddExtra;

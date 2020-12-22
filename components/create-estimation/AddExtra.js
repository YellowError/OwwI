import React from "react";
import FloatingInput from "../for-all-form/FloatingInput";
const AddExtra = ({ index }) => {
  return (
    <>
      <FloatingInput
        label="Nom de l'extra"
        htmlForAndId={`nameExtra${index}`}
      />
      <div className="flex justify-between">
        <select name={`operateurExtra${index}`}>
          <option value={true}>Positive</option>
          <option value={false}>Négative</option>
        </select>
        <FloatingInput
          className="w-6/12"
          label="Estimation prix en €"
          htmlForAndId={`prixExtra${index}`}
        />
      </div>
    </>
  );
};
export default AddExtra;

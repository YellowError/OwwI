import React from "react";
const DropHabitat = () => {
  return (
    <>
      <select>
        choississez le type
        <optgroup label="Maison">
          <option value="villa">Villa</option>
          <option value="Mitoyenne">Mitoyenne</option>
          <option value="Autre...">Autre...</option>
        </optgroup>
        <optgroup label="Appartement">
          <option value="Simple">Simple</option>
          <option value="Loft">Loft</option>
          <option value="Autre...">Autre...</option>
        </optgroup>
      </select>
    </>
  );
};
export default DropHabitat;

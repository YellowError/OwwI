import React, { useState } from "react";
import { ImmoType, ImmoSubType } from "../../common/immobilier";

const DropDownMenuImmoType = () => {
  var listSorted = [];

  const buildImmoTypeList = () => {
    var listCompleted = [];
    const Immo = { ...ImmoType, ...ImmoSubType };
    for (var key in Immo) {
      if (key == 0) {
      } else if (key < 101) {
        listCompleted.push({
          label: Immo[key],
          value: key * 100,
          description: "titre",
        });
      } else {
        listCompleted.push({
          label: Immo[key],
          value: key * 1,
          description: "option",
        });
      }
    }
    //Trie la liste par Value
    var byValue = listCompleted.slice(0);
    byValue.sort(function (a, b) {
      return a.value - b.value;
    });

    listSorted = byValue;
  };
  buildImmoTypeList();

  const [newList, setNewList] = useState("");

  const handleChange = (e) => {
    setNewList(e.target.value);
  };

  const choosingAnswer = (e) => {
    document.getElementById("displayAnswer").innerHTML = e.target.innerHTML;
    var valeur = e.target.getAttribute("value");
    var select = document.getElementById("subType");
    select.value = valeur;
    // console.log(select.value);
  };

  const selectTitreOuOption = (listeopn) => {
    return listeopn.map((labels) => {
      if (labels.description == "titre") {
        return (
          <optgroup
            key={labels.value / 100}
            value={labels.value / 100}
            label={labels.label}
            disabled
          ></optgroup>
        );
      } else {
        return (
          <option key={labels.value} value={labels.value}>
            {labels.label}
          </option>
        );
      }
    });
  };

  const titreOuOption = (listeopn) => {
    return listeopn.map((labels) => {
      if (labels.description == "titre") {
        return (
          <li
            key={labels.value / 100}
            value={labels.value / 100}
            className="dropdownLiTitle"
          >
            {labels.label}
          </li>
        );
      } else {
        return (
          <li
            key={labels.value}
            value={labels.value}
            className="dropdownLiOption"
            onClick={choosingAnswer}
          >
            {labels.label}
          </li>
        );
      }
    });
  };

  const deployList = () => {
    var element = document.querySelector(".dropdown-menu");
    element.classList.toggle("hidden");
  };

  return (
    <div className="Bis">
      <div className="selectStyle hidden">
        <label htmlFor="subType">Choisissez votre option: </label>
        <select
          id="subType"
          className="selectBorder"
          value={newList.value}
          onChange={handleChange}
          name="subType"
        >
          {selectTitreOuOption(listSorted)}
        </select>
      </div>

      <div className="dropdown dropdownDiv dropdownBorder" onClick={deployList}>
        <button className="dropdownButton " type="button">
          <span className="mr-1" id="displayAnswer">
            Choisissez votre option:
          </span>
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul className="dropdown-menu dropdownUl hidden">
          {titreOuOption(listSorted)}
        </ul>
      </div>
    </div>
  );
};
export default DropDownMenuImmoType;

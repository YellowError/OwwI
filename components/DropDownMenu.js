import React, { useState } from "react";

const DropDownMenu = ({ table, id }) => {
  const [newList, setNewList] = useState("");

  const handleChange = (e) => {
    setNewList(e.target.value);
  };

  const choosingAnswer = (e) => {
    document.getElementById(`${id + 1}`).innerHTML = e.target.innerHTML;

    var valeur = e.target.getAttribute("value");
    var select = document.getElementById(`${id}`);
    select.value = valeur;
  };

  var listCompleted = [];
  const buildList = () => {
    const list = { ...table };

    for (var key in list) {
      listCompleted.push({
        label: list[key],
        value: key * 1,
        description: "option",
      });
    }
  };
  buildList();

  const selectTitreOuOption = (listeopn) => {
    return listeopn.map((labels) => {
      if (labels.description == "titre") {
        return (
          <optgroup
            key={labels.value}
            value={labels.value}
            label={labels.label}
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
            onClick={choosingAnswer}
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
    var element = document.querySelector(`.${id}`);
    element.classList.toggle("hidden");
  };

  return (
    <div className="Bis">
      <div className="selectStyle hidden">
        <label htmlFor={id}>Choisissez votre option: </label>
        <select
          id={id}
          className="selectBorder"
          value={newList.value}
          onChange={handleChange}
          name={id}
        >
          {selectTitreOuOption(listCompleted)}
        </select>
      </div>

      <div className="dropdown dropdownDiv dropdownBorder" onClick={deployList}>
        <button className="dropdownButton " type="button">
          <span className="mr-1" id={id + 1}>
            Choisissez votre option:
          </span>
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul className={`${id} dropdownUl hidden`}>
          {titreOuOption(listCompleted)}
        </ul>
      </div>
    </div>
  );
};
export default DropDownMenu;

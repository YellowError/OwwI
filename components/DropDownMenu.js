import React from "react";

const listeoptions2 = [
  [
    {
      label: "Maison",
      value: 100,
      description: "category",
    },
    {
      label: "Villa",
      value: 101,
      description: "option",
    },
    {
      label: "Mitoyenne",
      value: 102,
      description: "option",
    },
    {
      label: "Autres...",
      value: 103,
      description: "option",
    },
  ],
  [
    {
      label: "Appartement",
      value: 200,
      description: "option",
    },
    {
      label: "Simple",
      value: 201,
      description: "option",
    },
    {
      label: "Loft",
      value: 202,
      description: "option",
    },
    {
      label: "Autres...",
      value: 203,
      description: "option",
    },
  ],
  [
    {
      label: "Building",
      value: 300,
      description: "option",
    },
    {
      label: "Petit",
      value: 301,
      description: "option",
    },
    {
      label: "Moyen",
      value: 302,
      description: "option",
    },
    {
      label: "Grand",
      value: 303,
      description: "option",
    },
    {
      label: "Autres...",
      value: 304,
      description: "option",
    },
  ],
];

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e);
    console.log("select: " + e.target.value);
    this.setState({ value: e.target.value });
  }

  choosingAnswer(e) {
    // console.log(e);
    console.log("style: " + e.target.getAttribute("value"));
    document.getElementById("displayAnswer").innerHTML = e.target.innerHTML;

    var valeur = e.target.getAttribute("value");
    var select = document.getElementById("dropDownList");
    select.value = valeur;
  }

  titreOuOption(listeopn) {
    return listeopn.map((uneOption) => {
      return uneOption.map((unLabel) => {
        if (parseInt(unLabel.value % 100) == 0) {
          return (
            <li
              key={unLabel.value}
              className="dropdownLiTitle"
              value={unLabel.value}
            >
              {unLabel.label}
            </li>
          );
        } else {
          return (
            <li
              key={unLabel.value}
              className="dropdownLiOption"
              value={unLabel.value}
              onClick={this.choosingAnswer}
            >
              {unLabel.label}
            </li>
          );
        }
      });
    });
  }

  deployList() {
    var element = document.querySelector(".dropdown-menu");
    element.classList.toggle("hidden");
  }

  render() {
    return (
      <div className="dropDownMenu">
        <div className="selectStyle hidden">
          <label htmlFor="dropDownList">Choisissez votre option: </label>
          <select
            id="dropDownList"
            className="selectBorder"
            value={this.state.value}
            onChange={this.handleChange}
            name="dropDownList"
          >
            {listeoptions2.map((option) => (
              <optgroup key={option[0].label} label={option[0].label}>
                {option.slice(1).map((labels) => (
                  <option key={labels.value} value={labels.value}>
                    {labels.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div
          className="dropdown dropdownDiv dropdownBorder"
          onClick={this.deployList}
        >
          <button className="dropdownButton ">
            <span className="mr-1" id="displayAnswer">
              Choisissez votre option:
            </span>
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul className="dropdown-menu dropdownUl hidden">
            {this.titreOuOption(listeoptions2)}
          </ul>
        </div>
      </div>
    );
  }
}
export default DropDownMenu;

// 1li ) add class block + click afficher 2eme liste
// autre li) remove all class

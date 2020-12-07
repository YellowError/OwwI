import React, { useState } from "react";

const PaginationEsti = () => {
  const [compteur, setCompteur] = useState(1);
  const [isStep1Default, setIsStep1Default] = useState(true);
  const [isStep1Completed, setStep1Completed] = useState(false);
  const [isStep2Completed, setStep2Completed] = useState(false);
  const [isStep3Completed, setStep3Completed] = useState(false);
  const [isStep4Completed, setStep4Completed] = useState(false);
  const [isStep5Completed, setStep5Completed] = useState(false);
  const [isStep6Completed, setStep6Completed] = useState(false);
  const [isStep7Completed, setStep7Completed] = useState(false);
  const [isStep8Completed, setStep8Completed] = useState(false);
  const [isStep9Completed, setStep9Completed] = useState(false);
  const [isStep10Completed, setStep10Completed] = useState(false);
  const [isStep2Current, setStep2Current] = useState(false);
  const [isStep3Current, setStep3Current] = useState(false);
  const [isStep4Current, setStep4Current] = useState(false);
  const [isStep5Current, setStep5Current] = useState(false);
  const [isStep6Current, setStep6Current] = useState(false);
  const [isStep7Current, setStep7Current] = useState(false);
  const [isStep8Current, setStep8Current] = useState(false);
  const [isStep9Current, setStep9Current] = useState(false);
  const [isStep10Current, setStep10Current] = useState(false);

  const btnNext = () => {
    if (compteur === 1) {
      setStep1Completed(true);
      setIsStep1Default(false);
      setStep2Current(true);
      setCompteur(compteur + 1);
    }
    if (compteur === 2) {
      setStep2Completed(true);
      setStep3Current(true);
      setCompteur(compteur + 1);
    }
    if (compteur === 3) {
      setStep3Completed(true);
      setStep4Current(true);
      setCompteur(compteur + 1);
    }
    if (compteur === 4) {
      setStep4Completed(true);
      setStep5Current(true);
      setCompteur(compteur + 1);
    }
    if (compteur === 5) {
      setStep5Completed(true);
      setStep6Current(true);
      setCompteur(compteur + 1);
    }
    if (compteur === 6) {
      setStep6Completed(true);
      setStep7Current(true);
      setCompteur(compteur + 1);
    }
    if (compteur === 7) {
      setStep7Completed(true);
      setStep8Current(true);
      setCompteur(compteur + 1);
    }
    if (compteur === 8) {
      setStep8Completed(true);
      setStep9Current(true);
      setCompteur(compteur + 1);
    }
    if (compteur === 9) {
      setStep9Completed(true);
      setStep10Current(true);
      setCompteur(compteur + 1);
    }
  };

  const btnBack = () => {
    if (compteur === 2) {
      setStep1Completed(false);
      setIsStep1Default(true);
      setStep2Current(false);
      setCompteur(compteur - 1);
    }
    if (compteur === 3) {
      setStep2Completed(false);
      setStep3Current(false);
      setCompteur(compteur - 1);
    }
    if (compteur === 4) {
      setStep3Completed(false);
      setStep4Current(false);
      setCompteur(compteur - 1);
    }
    if (compteur === 5) {
      setStep4Completed(false);
      setStep5Current(false);
      setCompteur(compteur - 1);
    }
    if (compteur === 6) {
      setStep5Completed(false);
      setStep6Current(false);
      setCompteur(compteur - 1);
    }
    if (compteur === 7) {
      setStep6Completed(false);
      setStep7Current(false);
      setCompteur(compteur - 1);
    }
    if (compteur === 8) {
      setStep7Completed(false);
      setStep8Current(false);
      setCompteur(compteur - 1);
    }
    if (compteur === 9) {
      setStep8Completed(false);
      setStep9Current(false);
      setCompteur(compteur - 1);
    }
    if (compteur === 10) {
      setStep9Completed(false);
      setStep10Current(false);
      setCompteur(compteur - 1);
    }
  };

  return (
    <ul className="flex items-center content">
      <li
        className={`${isStep1Completed ? "completed" : ""} ${
          isStep1Default ? "firstOne" : ""
        }`}
      >
        1
      </li>
      <li
        className={`${isStep2Completed ? "completed" : ""} ${
          isStep2Current ? "current" : ""
        }`}
      >
        2
      </li>
      <li
        className={`${isStep3Completed ? "completed" : ""} ${
          isStep3Current ? "current" : ""
        }`}
      >
        3
      </li>
      <li
        className={`${isStep4Completed ? "completed" : ""} ${
          isStep4Current ? "current" : ""
        }`}
      >
        4
      </li>
      <li
        className={`${isStep5Completed ? "completed" : ""} ${
          isStep5Current ? "current" : ""
        }`}
      >
        5
      </li>
      <li
        className={`${isStep6Completed ? "completed" : ""} ${
          isStep6Current ? "current" : ""
        }`}
      >
        6
      </li>
      <li
        className={`${isStep7Completed ? "completed" : ""} ${
          isStep7Current ? "current" : ""
        }`}
      >
        7
      </li>
      <li
        className={`${isStep8Completed ? "completed" : ""} ${
          isStep8Current ? "current" : ""
        }`}
      >
        8
      </li>
      <li
        className={`${isStep9Completed ? "completed" : ""} ${
          isStep9Current ? "current" : ""
        }`}
      >
        9
      </li>
      <li
        className={`${isStep10Completed ? "completed" : ""} ${
          isStep10Current ? "lastOne" : ""
        }`}
      >
        10
      </li>
    </ul>
  );
};

export default PaginationEsti;

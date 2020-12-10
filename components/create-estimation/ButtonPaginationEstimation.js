import React from "react";
const ButtonsPaginationEsti = ({ setStatus, status }) => {
  return (
    <>
      {status == 1 ? (
        <div className="flex justify-end">
          <button
            className="btn btnGreen"
            type="button"
            onClick={() => {
              setStatus(status + 1);
            }}
          >
            Suivant
          </button>
        </div>
      ) : (
        ""
      )}
      {status > 1 && status < 10 ? (
        <div className="flex justify-between">
          <button
            className="btn btnRed"
            type="button"
            onClick={() => {
              setStatus(status - 1);
            }}
          >
            Retour
          </button>
          <button
            className="btn btnGreen"
            type="button"
            onClick={() => {
              setStatus(status + 1);
            }}
          >
            suivant
          </button>
        </div>
      ) : (
        ""
      )}
      {status == 10 ? (
        <div className="flex justify-between">
          <button
            className="btn btnRed"
            type="button"
            onClick={() => {
              setStatus(status - 1);
            }}
          >
            Retour
          </button>
          <button className="btn btnGreen" type="submit">
            Valider
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default ButtonsPaginationEsti;

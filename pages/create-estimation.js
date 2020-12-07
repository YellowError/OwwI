import EstiClient from "../components/create-estimation/EstiClient";
import EstiCoordonee from "../components/create-estimation/EstiCoordonee";
import EstiDefinition from "../components/create-estimation/EstiDefintion";
import EstiEnergie from "../components/create-estimation/EstiEnergie";
import PaginationEsti from "../components/PaginationEsti";

const creaEstimation = () => {
  return (
    <>
      <h1>Création d'une nouvelle estimation</h1>
      <PaginationEsti />
      <form>
        <EstiClient />
        <EstiCoordonee />
        <EstiDefinition />
        <EstiEnergie />
        <button type="submit"></button>
      </form>
    </>
  );
};

export default creaEstimation;

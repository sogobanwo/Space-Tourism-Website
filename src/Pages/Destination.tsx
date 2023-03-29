import { FC } from "react";
import DestinationContent from "../components/DestinationContent";
import Header from "../components/header";

const Destination: FC = () => {
  return (
    <div className="destination">
      <Header />
      <DestinationContent />
    </div>
  );
};

export default Destination;

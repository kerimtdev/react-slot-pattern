import React from "react";
import useSlot from "../hooks/useSlot";
import withSlot from "../wrappers/withSlot";
import "../styles/card.css";

const Card: React.FC = ({ children }) => {
  const HeaderTemplate = useSlot({
    children,
    name: "Header",
    fallback: <>Card header not found!</>,
  });

  const BodyTemplate = useSlot({
    children,
    name: "Body",
    fallback: <>Card body not found!</>,
  });

  return (
    <div className="card">
      <div className="card__header">
        <HeaderTemplate />
      </div>
      <div className="card__body">
        <BodyTemplate />
      </div>
    </div>
  );
};

export default withSlot(Card);

import React from "react";
import { Card } from "react-bootstrap";
import { MiniCard } from "./MiniCard";

export const MainCard = ({ features }) => {
  return (
    <div>
      <Card className="main-card" style={{ width: "16rem", margin: "20px" }}>
        <Card.Body>
          <h5>Phone Features</h5>
          {features.map((feature) => (
            <div className="mini-card" key={feature.id}>
              <MiniCard name={feature.name} />
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

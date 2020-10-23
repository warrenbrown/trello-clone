import React from "react";
import { Card } from "react-bootstrap";

export const MiniCard = ({ name }) => {
  return (
    <>
      <Card className="mini-card" style={{ width: "14.5=6rem" }}>
        <Card.Body>{name}</Card.Body>
      </Card>
    </>
  );
};

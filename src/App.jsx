import React from "react";
import "./App.css";
import { MainCard } from "./components/MainCard";

function App() {
  return (
    <div className="container">
      <MainCard features={testFeatures} />
    </div>
  );
}
const testFeatures = [
  {
    id: 1,
    name: "Sub Woofer",
  },
  {
    id: 2,
    name: "4k Screen",
  },
  {
    id: 3,
    name: "1080p Camera",
  },
  {
    id: 4,
    name: "Face Scan",
  },
  {
    id: 5,
    name: "Finger Print Reader",
  },
  {
    id: 6,
    name: "4g Memory",
  },
];

export default App;

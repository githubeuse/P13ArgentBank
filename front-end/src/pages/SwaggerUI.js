import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerDocs = () => {
  return (
    <div style={{ width: "90%", margin: "auto", padding: "20px" }}>
      <h2>Documentation API</h2>
      <SwaggerUI url="./swagger.yaml" />
    </div>
  );
};

export default SwaggerDocs;

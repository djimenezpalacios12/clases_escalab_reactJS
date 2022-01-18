import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

/**
 * Patron de diseños
 * 1. stateless component, que solo renderizan data --> con parentesis ()
 * 2. stafull component: renderizan y manejan proceso logicos --> con llave {}
 */

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;

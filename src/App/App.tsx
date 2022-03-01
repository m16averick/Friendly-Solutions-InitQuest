import React from "react";
import "./style.css";
import './theme.scss';
import './mobile.css';
import { history } from "../_helpers/history";
import { Router } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import { PrivateRoute } from "../_components/PrivateRoute/PrivateRoute";
import { Layout } from "../_components/Layout/Layout";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Layout>
          {/*<Route path="/Reset" component={ResetPasswordPage} />
          <PrivateRoute path="/agreements" exact component={EAgreements} />
          <PrivateRoute path="/invoices" exact component={EInvoices} />
          */}
          <PrivateRoute path="/" exact component={HomePage} />
        </Layout>
      </Router>
    </>
  );
};

export default App;

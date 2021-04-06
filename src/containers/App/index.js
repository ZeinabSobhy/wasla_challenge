import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import useStyles from "../App/Style";
import { useIntl } from "react-intl";
import containers from "../../containers/containers/index";
import About from "../../components/About/index";
import ContactUs from "../../components/ContactUs/index";
import AboutCovid from "../../components/AboutCovid/CovidHome/index";

import { Backdrop, CircularProgress } from "@material-ui/core";
import Click from "../../components/AboutCovid/click/click";
const App = () => {
  const classes = useStyles();
  const locale = useIntl().locale;
  return (
    <Suspense
      fallback={
        <Backdrop className={classes.backdrop} open>
          <CircularProgress />
        </Backdrop>
      }
    >
      <switch>
        <Route exact path="/containers" component={containers} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/AboutCovid" component={AboutCovid} />
        <Route exact path="/AboutCovid/:country" component={Click} />
      </switch>
    </Suspense>
  );
};
export default App;

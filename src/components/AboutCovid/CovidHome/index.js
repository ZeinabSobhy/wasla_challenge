import React, { useContext } from "react";
import { useMediaQuery, Button } from "@material-ui/core";

import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import { useHistory } from "react-router-dom";
import { LocalizationContext } from "../../../context/LocalizationContext";
import { CoronaContext } from "../../../context/CoronaContext";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

function AboutCovid() {
  const [Corona, setCorona] = useContext(CoronaContext);
  const history = useHistory();
  return (
    <div className="continer">
      About covid
      <Grid>
        {Corona?.map((d) => (
          <Card>
            {d.Country}
            
            <button
              onClick={() => {
                history.push(`/AboutCovid/${d.Country}`);
              }}
            >
              more
            </button>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default AboutCovid;

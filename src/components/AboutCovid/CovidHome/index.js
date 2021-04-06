import React, { useContext, useEffect, useState } from "react";
import "../../AboutCovid/CovidHome/style.scss";
import { useMediaQuery, Button } from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
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
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import EnhancedTableHead from "@material-ui/core/FormControlLabel";

function AboutCovid() {
  const [Corona, setCorona] = useContext(CoronaContext);
  const [daily, setDaily] = useContext(CoronaContext);
  const [filter, setFilter] = useState("");
  const history = useHistory();

  return (
    <div className="continer">
    
      <Grid className="grid">
        {Corona.map((d) => (
          <Card className="card">
            Country:
            {d.Country}
            <br/>
            <button
              onClick={() => {
                history.push(`/AboutCovid/${d.Slug}`);
              }}
            >
              more about this country
            </button>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default AboutCovid;

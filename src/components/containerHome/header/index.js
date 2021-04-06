import React, { useContext } from "react";
import { useMediaQuery, Button } from "@material-ui/core";
import "./style.scss";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import { useHistory } from "react-router-dom";
import { LocalizationContext } from "../../../context/LocalizationContext";

function Header() {
  const [locale, switchLocale] = useContext(LocalizationContext);
  let history = useHistory();

  function handelClickHome() {
    history.push("/containers");
  }


  function handleClickAbout() {
    history.push("/about");
  }

  function handelClickContact() {
    history.push("/ContactUs");
  }

  function handelClickAboutCovid() {
    history.push("/AboutCovid");
  }

  return (
    <div className="continer">
      <Breadcrumbs className={locale == "en" ? "navBar" : "navBar_AR"}>
        <Link color="inherit" 
        onClick={handelClickHome}
        className="link">
          <FormattedMessage id="header.home" />
        </Link>

        <Link color="inherit"
         onClick={handleClickAbout} 
         className="link">
          <FormattedMessage id="header.about" />
        </Link>
        <Typography
          color="textPrimary"
          onClick={handelClickContact}
          className="link"
        >
          <FormattedMessage id="header.contact" />
        </Typography>


        <Typography
          color="textPrimary"
          onClick={handelClickAboutCovid}
          className="link"
        >
          <FormattedMessage id="header.AboutCovid" />
          
        </Typography>
      </Breadcrumbs>

      <div className="button">
        <button
          onClick={() =>
            locale == "en" ? switchLocale("ar") : switchLocale("en")
          }
          className="btn"
        >
          <FormattedMessage id="header.btn" />
        </button>
      </div>
    </div>
  );
}

export default Header;

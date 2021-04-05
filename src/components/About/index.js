
import React, { useContext } from "react";
import { useMediaQuery, Button, colors } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import { LocalizationContext } from "../../context/LocalizationContext";
import About_Us from "../../assets/images/about_us.jpg";
import "../About/style.scss";

import  DoctorInfo from "../About/DoctorInfo/index"


function About() {
  const [locale, switchLocale] = useContext(LocalizationContext);

  return (


    <div >
<div className='title_about'>
  <div className='about_title'><FormattedMessage  id= 'about.title'/></div>
 <br/>
<FormattedMessage id= 'about.subtitle'/>

 
</div>
   
    <div className='container_about'>
   
    <div className={locale == "en" ? "imag" : "imag_AR"}>
<img
src={About_Us}
/>
        </div>


        <div className={locale == "en" ? "about" : "about_AR"}>
        
        <FormattedMessage id= 'about.aboutUs'/>

        </div>
    </div>
<div>
  < DoctorInfo/>
</div>

    
    </div>
  );
}

export default About;

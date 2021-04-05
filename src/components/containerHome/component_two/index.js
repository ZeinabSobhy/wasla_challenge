
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
import Small_img from "../../../assets/images/small_img.webp";
import Small_Small_img  from "../../../assets/images/small_small_img.jpg";



function Specialize() {
  const [locale, switchLocale] = useContext(LocalizationContext);
 

  return (
    <div className="continer">
<div className="container_about_us">

<div className="text">
    <div className= {locale == "en" ? "about_us" : "about_us_AR"}>
   
    <FormattedMessage id= 'aboutUS.title1'/>
    
    </div>
    <div   className={locale == "en" ? "acontainer_about_us" : "container_about_us_AR"}>
   <div><FormattedMessage id= 'aboutUS.title2'/></div>
   <div><FormattedMessage id= 'aboutUS.title3'/></div>
   <div><FormattedMessage id= 'aboutUS.title4'/></div>
   </div>
</div>



<div className="sub_title">
<FormattedMessage id= 'aboutUS.subtitle'/>
</div>
</div>



<div className="imgs">
<div className="Small__img"  >
          <img
src={Small_img}
alt="Small_img"
/>  

</div>
<div className="Small_Small_img" >
<img
src={Small_Small_img}
alt="Small_Small_img"
/>


</div>
</div>
    
</div>
    
  );
}

export default Specialize;

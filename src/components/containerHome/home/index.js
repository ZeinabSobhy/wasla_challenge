import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Background_img from "../../../assets/images/big_img.jpg";
import { FormattedMessage } from "react-intl";
import "./style.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { LocalizationContext } from "../../../context/LocalizationContext";
import Specialize from "../component_two/index"

const Home = () => {
  const [locale, switchLocale] = useContext(LocalizationContext);

  return (
    <div className="contanier">
      <div container className="contanier__wrapper">
      
        <div
          className="Baby__img"
          style={{
            backgroundImage: `url(${Background_img})`,
          }}
        >
          <div className= {locale=="en"?"TextContiner":"TextContiner_AR"}>
         
            <div
              className={locale == "en" ? "sellcar__Title" : "sellcar__Title1"}
            >
              {" "}
              <FormattedMessage id="background.title" />
            </div>
            <div className="sellcar__Title">
              <FormattedMessage id="background.subtitle" />

            </div>
            <br/>
            <div  className="subtitle">
            <div>
            <FormattedMessage id="background.subtitle1" />

           </div>
            <div><FormattedMessage id="background.subtitle2" /> 
</div>
 <div><FormattedMessage id="background.subtitle3" />
 </div>
 <div> <FormattedMessage id="background.subtitle4" />
 </div>
 </div>
            
          </div>

         
        </div>
      </div>
      <div className="Specialize">
      <Specialize/>
      </div>
     
    </div>
  );
};
export default Home;

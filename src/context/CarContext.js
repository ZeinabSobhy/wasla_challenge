

import React, { useState,useContext } from 'react';
import { FormattedMessage } from "react-intl";
import { LocalizationContext } from "../context/LocalizationContext";
function Loclization() {
const [locale, switchLocale] = useContext(LocalizationContext);
}
const sourceData = [
    {
      name:  <FormattedMessage id= 'ContextData.DR1'/>,
     
      specialty: <FormattedMessage id='ContextData.specialty1'/>,
   
      info:<FormattedMessage id= 'ContextData.info1'/>
      
    },
    {
      name:  <FormattedMessage id= 'ContextData.DR2'/>,
     
      specialty: <FormattedMessage id='ContextData.specialty2'/>,
   
      info:<FormattedMessage id= 'ContextData.info2'/>
      
    },
  
    {
      name:  <FormattedMessage id= 'ContextData.DR3'/>,
     
      specialty: <FormattedMessage id='ContextData.specialty3'/>,
   
      info:<FormattedMessage id= 'ContextData.info3'/>
      
    },
    {
      name:  <FormattedMessage id= 'ContextData.DR4'/>,
     
      specialty: <FormattedMessage id='ContextData.specialty4'/>,
   
      info:<FormattedMessage id= 'ContextData.info4'/>
      
    },
    {
      name:  <FormattedMessage id= 'ContextData.DR5'/>,
     
      specialty: <FormattedMessage id='ContextData.specialty5'/>,
   
      info:<FormattedMessage id= 'ContextData.info5'/>
      
    },
    {
      name:  <FormattedMessage id= 'ContextData.DR6'/>,
     
      specialty: <FormattedMessage id='ContextData.specialty6'/>,
   
      info:<FormattedMessage id= 'ContextData.info6'/>
      
    },
    {
      name:  <FormattedMessage id= 'ContextData.DR7'/>,
     
      specialty: <FormattedMessage id='ContextData.specialty7'/>,
   
      info:<FormattedMessage id= 'ContextData.info7'/>
      
    },
    {
      name:  <FormattedMessage id= 'ContextData.DR8'/>,
     
      specialty: <FormattedMessage id='ContextData.specialty8'/>,
   
      info:<FormattedMessage id= 'ContextData.info8'/>
      
    },
    {
      name:  <FormattedMessage id= 'ContextData.DR9'/>,
     
      specialty: <FormattedMessage id='ContextData.specialty9'/>,
   
      info:<FormattedMessage id= 'ContextData.info9'/>
      
    },
   ]
const DrContext = React.createContext([{}, () => {}]);

const DrProvider = ({ children }) => {

	const [data, seData] = useState(sourceData );

	return (
		<DrContext.Provider value={[data, seData]}>{children}</DrContext.Provider>
	);
};

export { DrProvider, DrContext };
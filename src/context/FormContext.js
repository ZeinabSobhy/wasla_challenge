import React, { useState } from "react";

const FormContext = React.createContext([{}, () => {}]);

const FormProvider = ({ children }) => {
  const [form, setForm] = useState([]);
  
  return (
    <FormContext.Provider value={[form, setForm]}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };

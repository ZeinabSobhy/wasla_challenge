import React, { useState, useEffect, useContext } from "react";
import { FormattedMessage } from "react-intl";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/FormControl";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FormContext } from "../../context/FormContext";
import "../ContactUs/style.scss";
import { LocalizationContext } from "../../context/LocalizationContext";
import { Modal } from "@material-ui/core";
import Img_Done from "../../assets/images/Done.png";

const ContactUs = (props) => {
  const [error, setError] = useState({ fullname: false, message: false });
  const [message, setMessage] = useState(null);
  const [emil, setEmil] = useState(null);
  const [fullname, setFullName] = useState(null);
  const [formIsValid, setFormIsValid] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useContext(FormContext);

  const [locale, setLocale] = useContext(LocalizationContext);

  useEffect(() => {
    if (message && fullname && emil) {
      setFormIsValid(true);
    } else {
      setFormIsValid(null);
    }
  }, [message, fullname, emil]);

  const errorMessage = (msg) => {
    return (
      <div className="error_div">
        <p>{msg}</p>
      </div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid && !error.fullname && !error.message && !error.emil) {
      handlePostRequest({ message: message, fullname: fullname, emil: emil });
    } else {
      setFormIsValid(false);
    }
  };
  const handlePostRequest = (body) => {
    setOpen(!open);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  const handleChangeFullName = (event) => {
    const fullname = event.target.value;

    if (fullname === "" || fullname === null || /^\d+$/.test(fullname)) {
      setError({ ...error, fullname: true });
      setFormIsValid(false);
    } else {
      setError({ ...error, fullname: false });
    }
    setFullName(fullname);
  };
  const handleChangeMessage = (event) => {
    const num = event.target.value;
    if (num === "" || num === null || /^\d+$/.test(message)) {
      setError({ ...error, message: true });
      setFormIsValid(false);
    } else {
      setError({ ...error, message: false });
    }
    setMessage(num);
  };

  const handleChangeEmil = (event) => {
    const emil = event.target.value;
    if (
      emil === "" ||
      emil === null ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emil)
    ) {
      setError({ ...error, emil: true });
      setFormIsValid(false);
    } else {
      setError({ ...error, emil: false });
    }
    setEmil(emil);
  };

  return (
    <div className="roott">
      <div className="contact_text">
        <div className="title_contact">Contact us</div>
        <div className="sub_title_contact">
          User, Investor or Brand; do not hesitate to contact us directly and we
          will get back to you as soon as possible.
        </div>
      </div>
      <div className="form_div">
        <form
          autoComplete={false}
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          {formIsValid == null || formIsValid == true ? null : (
            <div className="error_div" style={{ justifyContent: "flex-start" }}>
              <p className="error_div_msg" style={{ marginInline: "1rem" }}>
                <FormattedMessage id="validation.allFields" />
              </p>
            </div>
          )}

          <FormControl>
            <label className="form_div_label" htmlFor={"car_model"}>
              Full Name
            </label>
            <input
              value={fullname}
              type="text"
              name="full_name"
              style={
                error.fullname || formIsValid == false
                  ? {
                      border: "solid 1px #ec1c24",
                      backgroundColor: "rgba(236, 28, 36, 0.04)",
                    }
                  : null
              }
              placeholder="Enter Full Name"
              className="form_div_ele"
              id="full_name"
              onChange={(e) => {
                handleChangeFullName(e);
              }}
              onBlur={(e) => {
                handleChangeFullName(e);
              }}
            />
            {error.fullname ? errorMessage("enter your full name") : null}
          </FormControl>
          <FormControl>
            <label className="form_div_label" htmlFor={"phone"}>
              Message
            </label>
            <input
              value={message}
              type="text"
              name="message"
              style={
                error.message || formIsValid == false
                  ? {
                      border: "solid 1px #ec1c24",
                      backgroundColor: "rgba(236, 28, 36, 0.04)",
                    }
                  : null
              }
              placeholder="tell us who you are "
              className="form_div_ele"
              id="message"
              onChange={(e) => {
                handleChangeMessage(e);
              }}
              onBlur={(e) => {
                handleChangeMessage(e);
              }}
            />
            {error.Message ? errorMessage("pleace Enter your Message") : null}
          </FormControl>

          <FormControl>
            <label className="form_div_label" htmlFor={"phone"}>
              Email
            </label>
            <input
              value={emil}
              type="emil"
              name="emil"
              style={
                error.emil || formIsValid == false
                  ? {
                      border: "solid 1px #ec1c24",
                      backgroundColor: "rgba(236, 28, 36, 0.04)",
                    }
                  : null
              }
              placeholder="Enter your Email "
              className="form_div_ele"
              id="emil"
              onChange={(e) => {
                handleChangeEmil(e);
              }}
              onBlur={(e) => {
                handleChangeEmil(e);
              }}
            />
            {error.emil ? errorMessage("pleace enter emil") : null}
          </FormControl>

          <FormControl>
            <button onClick={(e) => handleSubmit(e)} className="btn_confirm">
              SUBMIT
            </button>
          </FormControl>
        </form>

        <Modal
        className='model'
          BackdropProps={{
            style: { background: "rgba(0, 0, 0, 0.3)" },
          }}
          open={open}
          onClose={() => setOpen(!open)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className='text_done'>
        
         <div>
           Thank you 
         </div>
          <div>Your message has been delivered
We’ll get back to you shortly!</div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ContactUs;

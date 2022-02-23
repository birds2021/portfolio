import React from "react";
import { Element } from "react-scroll";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import Mail from "@material-ui/icons/MailOutline";
import "./contactContainer__topContact.css";

const contactContainer__topContact = () => {
  return (
    <>
      <Element id="Contact" className="contactContainer">
        <div className="contactContainer_address">
          <p>
            <AddLocationIcon />
            Near kings college,
            <br />
            Irungattukottai,
            <br />
            sriperumbudur,
            <br />
            kanchipuram,
            <br />
            tamilnadu,
            <br />
            india
          </p>

          <div></div>
        </div>

        <div className="contactContainer_mail">
          <p>
            <Mail />
            birdstechnology2021@gmail.com
          </p>
        </div>
      </Element>
    </>
  );
};

export default contactContainer__topContact;

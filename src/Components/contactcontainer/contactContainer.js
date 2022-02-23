import React from "react";
import ContactContainer__topContact from "./contactContainer__topContact/contactContainer__topContact";
import ContactContainer_BottomContent from "./contactContainer_BottomContent/contactContainer_BottomContent";

function contactContainer() {
  return (
    <>
      <ContactContainer__topContact />
      <ContactContainer_BottomContent />
    </>
  );
}

export default contactContainer;

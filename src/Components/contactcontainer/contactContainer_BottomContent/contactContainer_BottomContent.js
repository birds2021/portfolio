import React from "react";
import "./contactContainer_BottomContent.css";

import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import WhatsApp from "@material-ui/icons/WhatsApp";
import LinkedIn from "@material-ui/icons/LinkedIn";

function contactContainer_BottomContent() {
  return (
    <>
      <div className="contactContainer_BottomContent">
        <h3 className="social_media"> our social media contact</h3>
        <a href="instagram" className="instagram">
          {/* https://www.instagram.com/invites/contact/?i=dof1mbti9sy&utm_content=8jqhtaz */}
          <Instagram />
        </a>

        <a href="facebook" className="facebook">
          <Facebook />
        </a>

        <a href="whatsapp" className="whatsapp">
          <WhatsApp />
        </a>

        <a href="linkedin" className="linkedin">
          <LinkedIn />
        </a>
      </div>
    </>
  );
}

export default contactContainer_BottomContent;

import React from "react";
import classes from "./Footer.module.css";
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { IconContext } from "react-icons/lib";
function Footer() {
  return (
    <section className={classes.footerContainer}>
      <div>
        <h4 className={classes.copyright}>TasteBud. All Rights Reserved</h4>
        <div className={classes.socials}>
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <TiSocialFacebook />
            <TiSocialGithub />
            <TiSocialLinkedin />
            <TiSocialTwitter />
          </IconContext.Provider>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import React from "react";
import ReplyIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import("./footer.css");

const Footer = () => {
  return (
    <div className="footer container">
      <IconButton className="footer__repeat">
        <ReplyIcon fontSize="large" />
      </IconButton>
      <IconButton className="footer__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="footer__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="footer__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="footer__lightning">
        <FlashIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";

export default function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      <IconButton onClick={() => history.replace(backButton)}>
        {backButton ? (
          <ArrowBackIosIcon />
        ) : (
          <PersonIcon fontSize="large" className="header__icon" />
        )}
      </IconButton>

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="Tinder-logo"
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

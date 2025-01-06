import React, { useState } from "react";
import "./styles/Header.css";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/about`);
    }, 1000);
  };
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="containerr ">
            <div className="row">
              <div className="col-md-12 col-md-offset-2 intro-text">
                <h1 className="fs-5 fontTitle" >
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p >{props.data ? props.data.paragraph : "Loading"}</p>
                {/* <a
                
                className="text-primary btn-lg"
                onClick={handleClick}
              >
                Learn More
              </a> */}
                <a
                  className="custom-button"
                  onClick={handleClick}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  {isLoading ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                      style={{
                        marginRight: "10px",
                      }}
                    ></span>
                  ) : null}
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

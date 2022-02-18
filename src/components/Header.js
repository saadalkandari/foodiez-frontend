import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-dark py-5 recipeBG">
        {/* hero */}
        <div className="container px-4 px-lg-5 my-5 ">
          <div className=" hometitle">
            <h1 className="display-4 fw-bolder titlez">RECIPES</h1>
            <p className=" sloganz">recipes made simpler</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

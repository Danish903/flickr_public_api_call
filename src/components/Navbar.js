import React from "react";
const Navbar = ({ onChange, handleSubmit, tags }) => {
  console.log(tags);
  return (
    <header className="header">
      <img src="/assets/flickr.svg" alt="flickr" className="logo" />
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Search by Tags"
          onChange={onChange}
          value={tags}
          name="tags"
        />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref="/assets/sprite.svg#icon-magnifying-glass" />
          </svg>
        </button>
      </form>
    </header>
  );
};

export default Navbar;

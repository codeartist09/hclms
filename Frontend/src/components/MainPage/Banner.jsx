import { useState } from "react";
import { useHistory } from "react-router";
import { ReactComponent as Search } from "../../images/logo/search.svg";
import "./Banner.scss";
//import Category from "./Unused/Category";

const Banner = () => {
  const [input, setInput] = useState();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      history.push({
        pathname: `/search`,
        search: `?src=ukw&q=${input}`,
        state: {
          detail: input,
        },
      });
    } else {
      history.push("/");
    }
  };
  return (
    <div className="banner">
      <div className="banner__modal">
        <p> Search for Training Content </p>
        <form className="banner__form" onSubmit={submitHandler}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a search term"
          />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;

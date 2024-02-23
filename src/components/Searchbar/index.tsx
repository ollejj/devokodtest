import { ChangeEvent, useState } from "react";
import { useAutocomplete } from "../../hooks/useAutocomplete";
import style from "./index.module.css";

export const Searchbar = () => {
  const [inputVal, setInputVal] = useState<string>("");

  const { data } = useAutocomplete(inputVal);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  };

  console.log(data);

  return (
    <form className={style.form}>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};

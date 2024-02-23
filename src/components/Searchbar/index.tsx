import style from "./index.module.css";

export const Searchbar = () => {
  return (
    <form className={style.form}>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </form>
  );
};

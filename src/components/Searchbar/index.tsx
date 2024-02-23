import { useState } from "react";
import { useAutocomplete } from "../../hooks/useAutocomplete";
import style from "./index.module.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSearchContext } from "../../context/SearchContext";

export const Searchbar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  console.log(errors);

  const { setInput } = useSearchContext();

  const { data, isLoading, isError } = useAutocomplete(watch("search"));
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setInput(data.search);
  };

  const handleItemClick = (item: string) => {
    setValue("search", item);
    handleSubmit((formData) => {
      formData.search = item;
      onSubmit(formData);
    })();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={style.input}
        type="text"
        placeholder="Search..."
        {...register("search")}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button className={style.submit} type="submit"></button>
      <div className={style.suggestion_container} data-testid="suggestionBox">
        {isError && <p className={style.no_results}>Invalid character</p>}
        {isLoading && <p className={style.no_results}>Loading...</p>}
        {!data ||
          (data.length === 0 && (
            <p className={style.no_results}>
              No Results for "{watch("search")}"
            </p>
          ))}
        {data &&
          isFocused &&
          data.map((item: string) => {
            return (
              <button
                className={style.suggestion}
                type="submit"
                onMouseDown={() => handleItemClick(item)}
              >
                {item}
              </button>
            );
          })}
      </div>
    </form>
  );
};

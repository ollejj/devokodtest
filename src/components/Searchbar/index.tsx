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

  const { setInput } = useSearchContext();

  const { data } = useAutocomplete(watch("search"));
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
      <button className={style.submit} type="submit">
        Search
      </button>
      <div>
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

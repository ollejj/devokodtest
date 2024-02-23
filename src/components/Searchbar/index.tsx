import { useState } from "react";
import { useAutocomplete } from "../../hooks/useAutocomplete";
import style from "./index.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

export const Searchbar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const { data } = useAutocomplete(watch("search"));

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

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
        type="text"
        placeholder="Search..."
        {...register("search")}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button type="submit">Search</button>
      <div>
        {data &&
          isFocused &&
          data.map((item: string) => {
            return (
              <button type="submit" onClick={() => handleItemClick(item)}>
                {item}
              </button>
            );
          })}
      </div>
    </form>
  );
};

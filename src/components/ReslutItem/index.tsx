import style from "./index.module.css";

type TResultItemProps = {
  title: string;
  runtime: number;
  released: string;
  poster: string;
  popularity: number;
  overview: string;
  genres: string[];
};

export const ResultItem = ({
  title,
  runtime,
  released,
  poster,
  popularity,
  overview,
  genres,
}: TResultItemProps) => {
  const convertRuntime = (minutes: number) => {
    if (minutes <= 0) return "00:00";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const hoursString = hours < 10 ? "0" + hours : hours.toString();
    const minutesString =
      remainingMinutes < 10
        ? "0" + remainingMinutes
        : remainingMinutes.toString();

    return hoursString + ":" + minutesString;
  };

  return (
    <div className={style.container}>
      <img className={style.poster} src={poster} />
      <div className={style.col}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.released}>{released}</div>
        <div className={style.genres}>
          {genres.map((genre) => (
            <p>{genre}</p>
          ))}
        </div>
        <div className={style.runtime}>
          <div className={style.clock}></div>
          {convertRuntime(runtime)}
        </div>
        <div className={style.popularity}>
          <div className={style.people}></div>
          {Math.ceil(popularity)}
        </div>
      </div>
      <div className={style.overview}>{overview}</div>
    </div>
  );
};

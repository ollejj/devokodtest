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
  return (
    <div>
      <div>{title}</div>
      <div>{runtime}</div>
      <div>{released}</div>
      <div>{poster}</div>
      <div>{popularity}</div>
      <div>{overview}</div>
      <div>{genres}</div>
    </div>
  );
};

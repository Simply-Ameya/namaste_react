import { useRouteError } from "react-router-dom";

export const ErrorComponent = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h1>Something went wrong</h1>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

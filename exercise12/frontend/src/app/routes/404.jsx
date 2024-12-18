import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";

export const NotFoundRoute = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-lvh w-lvw flex-col items-center justify-center gap-4 bg-red-500">
      <h1 className="text-6xl font-semibold">404</h1>
      <h2 className="text-2xl font-semibold">Taka strona nie istnieje.</h2>
      <Button variant="primary" onClick={() => navigate("/")}>
        Przejdź na stronę główną
      </Button>
    </div>
  );
};

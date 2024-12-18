import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="h-24 bg-yellow-400 px-8 py-4 font-semibold">
      <Container className="flex h-full items-center justify-between gap-4">
        <p className="text-sm">&copy; 2024 .aha. Wszelkie prawa zastrzeżone.</p>
        <div className="flex items-center">
          <a href="/terms" className="text-md">
            Regulamin{" "}
          </a>
        </div>
      </Container>
    </footer>
  );
};

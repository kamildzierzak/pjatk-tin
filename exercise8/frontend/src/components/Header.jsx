import { Container } from "./Container";

export const Header = () => {
  return (
    <nav className="h-20 bg-yellow-400 px-8 py-4 font-semibold">
      <Container className="flex h-full w-full items-center justify-between gap-4">
        <a href="/" className="text-2xl font-bold">
          .aha
        </a>
        <div className="flex gap-4">
          <ul className="text-md flex items-center gap-4">
            <li>
              <a href="/">Strona główna</a>
            </li>
            <li>
              <a href="/courses">Kursy</a>
            </li>
            <li>
              <a href="/about">O nas</a>
            </li>
            <li>
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
          <a
            // href="/auth/login"
            href="/app"
            className="rounded bg-green-500 p-2 font-semibold text-white transition-all hover:scale-110"
          >
            Zaloguj się
          </a>
        </div>
      </Container>
    </nav>
  );
};

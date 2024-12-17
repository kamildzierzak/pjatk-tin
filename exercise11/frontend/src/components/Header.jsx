import { Container } from "./Container";
import { LinkButton } from "./LinkButton";

export const Header = () => {
  return (
    <nav className="h-20 bg-yellow-400 px-8 py-4 font-semibold">
      <Container className="flex h-full w-full items-center justify-between gap-4">
        <a href="/" className="text-2xl font-bold">
          .aha
        </a>
        <div className="flex gap-4">
          <ul className="flex items-center gap-4">
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
          <LinkButton
            //  to="/auth/login"
            to="/app"
            variant="primary"
          >
            Zaloguj się
          </LinkButton>
        </div>
      </Container>
    </nav>
  );
};

import heroImage from "../assets/hero.jpg";
import { Container } from "./Container";
import { LinkButton } from "./LinkButton";

export const Hero = () => {
  return (
    <section className="p-8">
      <div className="relative">
        <div className="absolute overflow-hidden rounded lg:max-h-[440px]">
          <img
            src={heroImage}
            alt="Dwa ołówki na żółtym tle"
            className="h-full w-full object-cover"
          />
        </div>
        <Container className="relative flex p-8">
          <div className="flex max-w-[720px] flex-col gap-8">
            <h1 className="text-6xl font-bold">
              Z nami rozwiniesz potencjał swojego dziecka!
            </h1>
            <p className="text-3xl font-semibold">
              Oferujemy zajęcia, które uczą dzieci pewności siebie, skutecznej
              nauki i miłości do wiedzy.
            </p>
            <div className="flex gap-4 text-2xl font-bold">
              <LinkButton to="/courses" variant="secondary" className={"p-4"}>
                Zobacz kursy
              </LinkButton>
              <LinkButton
                to="/auth/register"
                variant="primary"
                className={"p-4"}
              >
                Dołącz do nas
              </LinkButton>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

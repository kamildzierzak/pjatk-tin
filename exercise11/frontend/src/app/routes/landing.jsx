import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { Container } from "../../components/Container";

export const LandingRoute = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section className="p-8">
          <Container className="my-10 grid grid-cols-3 gap-4">
            <div className="col-span-2 rounded bg-green-500 p-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              repellendus laudantium illum rem molestias voluptatibus officiis
              tenetur, atque enim ipsum possimus, doloremque, accusantium
              consequatur saepe! Temporibus quo eveniet deleniti nihil!
            </div>
            <div className="rounded bg-yellow-500 p-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              repellendus laudantium illum rem molestias voluptatibus officiis
              tenetur, atque enim ipsum possimus, doloremque, accusantium
              consequatur saepe! Temporibus quo eveniet deleniti nihil!
            </div>
            <div className="rounded bg-yellow-500 p-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              repellendus laudantium illum rem molestias voluptatibus officiis
              tenetur, atque enim ipsum possimus, doloremque, accusantium
              consequatur saepe! Temporibus quo eveniet deleniti nihil!
            </div>
            <div className="col-span-2 rounded bg-green-500 p-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              repellendus laudantium illum rem molestias voluptatibus officiis
              tenetur, atque enim ipsum possimus, doloremque, accusantium
              consequatur saepe! Temporibus quo eveniet deleniti nihil!
            </div>
            <div className="col-span-2 rounded bg-green-500 p-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              repellendus laudantium illum rem molestias voluptatibus officiis
              tenetur, atque enim ipsum possimus, doloremque, accusantium
              consequatur saepe! Temporibus quo eveniet deleniti nihil!
            </div>
            <div className="rounded bg-yellow-500 p-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              repellendus laudantium illum rem molestias voluptatibus officiis
              tenetur, atque enim ipsum possimus, doloremque, accusantium
              consequatur saepe! Temporibus quo eveniet deleniti nihil!
            </div>
            <div className="rounded bg-yellow-500 p-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              repellendus laudantium illum rem molestias voluptatibus officiis
              tenetur, atque enim ipsum possimus, doloremque, accusantium
              consequatur saepe! Temporibus quo eveniet deleniti nihil!
            </div>
            <div className="col-span-2 rounded bg-green-500 p-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              repellendus laudantium illum rem molestias voluptatibus officiis
              tenetur, atque enim ipsum possimus, doloremque, accusantium
              consequatur saepe! Temporibus quo eveniet deleniti nihil!
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

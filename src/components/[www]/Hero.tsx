import { Button } from "../core/button";
import { Container } from "../core/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="border-x border-neutral-900 py-48">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-archivo max-w-4xl text-center text-4xl font-medium text-white md:text-6xl">
              Compound Advertising and Ecommerce Outcomes with Real-Time
              Relevance.
            </h1>

            <p className="mx-auto max-w-xl text-center font-light">
              Join the beta program now to be one of the first ones to give
              Portal a spin. Present your next project with finesse, impress,
              get paid fast. Open in beta in selected regions.
            </p>
            <div className="relative flex w-fit flex-wrap gap-4">
              <Button>Make the switch</Button>
              <Button>Get a demo</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

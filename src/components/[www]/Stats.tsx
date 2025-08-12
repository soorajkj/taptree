import { Container } from "../core/container";

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-neutral-900">
      <Container>
        <div className="border-x border-neutral-900 py-24">
          <div className="flex flex-row items-center justify-center gap-8">
            <div className="flex flex-1 flex-col items-center space-y-2">
              <span className="text-sm text-neutral-500 uppercase">
                Links Created
              </span>
              <p className="font-mono text-2xl font-medium text-orange-600">
                52,865,711
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center space-y-2">
              <span className="text-sm text-neutral-500 uppercase">
                Clicks Tracked
              </span>
              <p className="font-mono text-2xl font-medium text-orange-600">
                746,776,802
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center space-y-2">
              <span className="text-sm text-neutral-500 uppercase">
                Sales Tracked
              </span>
              <p className="font-mono text-2xl font-medium text-orange-600">
                $36,958,918.59
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

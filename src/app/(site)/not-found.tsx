import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main>
      <section className="mx-auto max-w-[600px] px-[18px] py-[130px] pb-[150px] text-center sm:px-8">
        <div className="font-heading text-[80px] font-extrabold tracking-tighter text-pink sm:text-[100px]">404</div>
        <h1 className="mt-1.5 font-heading text-2xl font-extrabold">This page went missing in transit</h1>
        <p className="mt-3 text-[15.5px] text-muted-2">The page you&apos;re looking for doesn&apos;t exist. Try the catalog or head back home.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <LinkButton href="/">Back to home</LinkButton>
          <LinkButton href="/products" variant="ghost-dark">
            Browse products
          </LinkButton>
        </div>
      </section>
    </main>
  );
}

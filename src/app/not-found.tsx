import { Header } from "@/components/Header";
import { NotFoundView } from "@/components/NotFoundView";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <NotFoundView />
      </main>
    </div>
  );
}

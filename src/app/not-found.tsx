import { Header } from "@/components/Header";
import { NotFoundView } from "@/components/NotFoundView";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg">
      <Header founded={COMPANY.founded} />
      <main>
        <NotFoundView />
      </main>
    </div>
  );
}

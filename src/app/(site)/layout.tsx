import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Header } from "@/components/Header";
import { COMPANY } from "@/lib/constants";
import { getProducts, getSiteSettings } from "@/lib/queries";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [settings, products] = await Promise.all([getSiteSettings(), getProducts()]);

  return (
    <div className="min-h-screen bg-bg">
      <Header founded={COMPANY.founded} />
      {children}
      <Footer settings={settings} products={products} />
      <FloatingActions whatsappNumber={settings.whatsappNumber || COMPANY.whatsapp} />
    </div>
  );
}

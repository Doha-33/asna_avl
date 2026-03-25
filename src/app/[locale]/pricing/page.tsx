import PricingPageContent from "@/components/pages/Pricing";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "ar";
  return <PricingPageContent lang={lang} />;
}

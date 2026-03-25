import HomePage from "@/components/pages/Home";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "ar";
  return <HomePage lang={lang} />;
}

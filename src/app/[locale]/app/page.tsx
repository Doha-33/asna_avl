import AppPage from "@/components/pages/AppPage";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AppPage />;
}

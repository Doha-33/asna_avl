import ProductComparison from "@/components/pages/ProductComparison";

export default async function ComparePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ id1?: string; id2?: string }>;
}) {
  const { id1, id2 } = await searchParams;

  if (!id1 || !id2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500">Please provide two product IDs to compare.</p>
      </div>
    );
  }

  return <ProductComparison id1={id1} id2={id2} />;
}

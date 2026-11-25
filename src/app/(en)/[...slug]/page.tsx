// EN inner pages (product landing, service, industry, about, hub) from src/content/pages/registry.ts.
import { InnerRoute, innerMetadata, staticParams } from "@/components/landing/route";

export const dynamicParams = false;

export function generateStaticParams() {
  return staticParams("en");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return innerMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <InnerRoute lang="en" slug={slug} />;
}

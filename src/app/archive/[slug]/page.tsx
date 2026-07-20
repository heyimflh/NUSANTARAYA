import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArchiveItemBySlug, getPublishedArchiveItems } from "@/data/archive/archiveItems";
import { ArchiveDetail } from "@/components/archive/ArchiveDetail";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const items = getPublishedArchiveItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getArchiveItemBySlug(params.slug);
  
  if (!item || item.status !== "published") {
    return {
      title: "Arsip Tidak Ditemukan | Nusa Archive",
    };
  }

  const title = `${item.localeContent.id.title} | Nusa Archive`;
  const description = item.localeContent.id.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: item.media.map(m => m.src),
    },
    alternates: {
      canonical: `/archive/${params.slug}`,
    }
  };
}

export default function ArchiveDetailPage({ params }: Props) {
  const item = getArchiveItemBySlug(params.slug);

  if (!item || item.status !== "published") {
    notFound();
  }

  return <ArchiveDetail item={item} />;
}

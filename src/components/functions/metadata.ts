// import { HOST } from "@/utils/constants";
import { Metadata } from "next";
const HOST = "https://umhealth.vercel.app"
export type MetadataProps = {
  title: string;
  description: string;
  img?: string;
  path?: string;
};

export function appMetadata({
  title,
  description,
  img,
}: MetadataProps): Metadata {
  const keywords = [
    "umhealth",
    "hospital",
    "consultation",
    ...title.split(" "),
    ...description.split(" "),
  ];
  const defaultImage = `${HOST}/images/banner.png`;
  const buildImg = img
    ? img.startsWith("/")
      ? HOST + img
      : img
    : defaultImage;

  return {
    title,
    description,
    metadataBase: new URL(HOST),
    icons: ["/images/icon-rounded.png", "/images/icon.png"],
    applicationName: "UMHealth",
    keywords: keywords,
    manifest: "/files/manifest.json",
    twitter: { title, description, images: [buildImg] },
    openGraph: {
      title,
      description,
      images: [buildImg],
      tags: keywords,
    },
  };
}

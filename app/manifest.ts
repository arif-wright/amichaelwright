import type { MetadataRoute } from "next";
import { authorName, seriesName } from "./site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${authorName} | ${seriesName}`,
    short_name: seriesName,
    description:
      "The official author site for A. Michael Wright and The Wellspring Saga.",
    start_url: "/",
    display: "standalone",
    background_color: "#050202",
    theme_color: "#050202",
    icons: [
      {
        src: "/images/favicon_180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/images/favicon_512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

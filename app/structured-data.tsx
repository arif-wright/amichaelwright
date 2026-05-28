import {
  authorImage,
  authorName,
  series,
  seriesName,
  siteDescription,
  siteUrl,
} from "./site-data";

export default function StructuredData() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${authorName} | ${seriesName}`,
      description: siteDescription,
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteUrl}/#author`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#author`,
      name: authorName,
      url: siteUrl,
      image: `${siteUrl}${authorImage}`,
      jobTitle: "Author",
      description:
        "A. Michael Wright is a storyteller, designer, habitual worldbuilder, and author of The Wellspring Saga.",
      knowsAbout: [
        "Epic fantasy",
        "Dark fantasy",
        "Worldbuilding",
        "Mythic fantasy",
      ],
    },
    {
      "@type": "CreativeWorkSeries",
      "@id": `${siteUrl}/#series`,
      name: seriesName,
      url: siteUrl,
      genre: ["Epic fantasy", "Dark fantasy", "Mythic fantasy"],
      author: {
        "@id": `${siteUrl}/#author`,
      },
      description:
        "The Wellspring Saga is a mythic dark fantasy series about fractured worlds, old powers, and impossible survivors.",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#reading-order`,
      name: `${seriesName} reading order`,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: series.length,
      itemListElement: series.map((book) => ({
        "@type": "ListItem",
        position: book.position,
        url: book.link,
        item: {
          "@id": `${siteUrl}/#book-${book.position}`,
        },
      })),
    },
    ...series.map((book) => ({
      "@type": "Book",
      "@id": `${siteUrl}/#book-${book.position}`,
      name: book.title,
      url: book.link,
      image: `${siteUrl}${book.cover}`,
      description: book.shortDescription,
      position: book.position,
      inLanguage: "en-US",
      genre: ["Epic fantasy", "Dark fantasy", "Mythic fantasy"],
      bookFormat: "https://schema.org/EBook",
      author: {
        "@id": `${siteUrl}/#author`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#series`,
      },
      offers: {
        "@type": "Offer",
        url: book.link,
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Amazon",
        },
      },
    })),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { jsonLd } from "../content/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://fidelomar.github.io/"),
  title: "Fidel Omar García | Ingeniero de Software",
  description:
    "Sitio profesional de Fidel Omar García. Ingeniero de software especializado en .NET, SQL Server, APIs e integraciones empresariales.",
  applicationName: "Fidel Omar García - Portafolio Profesional",
  authors: [{ name: "Fidel Omar García", url: "https://fidelomar.github.io/" }],
  creator: "Fidel Omar García",
  publisher: "Fidel Omar García",
  category: "technology",
  alternates: {
    canonical: "https://fidelomar.github.io/",
  },
  openGraph: {
    title: "Fidel Omar García | Ingeniero de Software",
    description:
      "Sitio profesional de Fidel Omar García. Ingeniero de software especializado en .NET, SQL Server, APIs e integraciones empresariales.",
    url: "https://fidelomar.github.io/",
    siteName: "Fidel Omar García",
    locale: "es_MX",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidel Omar García | Ingeniero de Software",
    description:
      "Sitio profesional de Fidel Omar García. Ingeniero de software especializado en .NET, SQL Server, APIs e integraciones empresariales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Serialización segura de JSON-LD evitando posibles inyecciones o cierres prematuros de script
  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}

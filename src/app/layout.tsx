import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fidelomar.github.io/"),
  title: "Fidel Omar García | Ingeniero de Software",
  description:
    "Sitio profesional de Fidel Omar García. Ingeniero de software especializado en .NET, SQL Server, APIs e integraciones empresariales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}

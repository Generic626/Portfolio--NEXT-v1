import "./globals.css";

export const metadata = {
  title: "MATTHEW.DEV",
  description: "Portfolio for Matthew Fung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

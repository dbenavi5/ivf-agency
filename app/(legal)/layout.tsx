import { LegalHeader } from "./components/legal-header";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LegalHeader/>
      <main>{children}</main>
    </>
  );
}

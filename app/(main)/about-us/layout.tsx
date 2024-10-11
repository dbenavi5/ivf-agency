import { AboutHeader } from "./components/about-header";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AboutHeader />
      <main>{children}</main>
    </>
  );
}

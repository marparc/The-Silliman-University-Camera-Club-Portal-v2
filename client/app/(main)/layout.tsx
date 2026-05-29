// app/(main)/layout.tsx
import { Navbar } from "@/components/molecules/navbar";
import { Footer } from "@/components/molecules/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

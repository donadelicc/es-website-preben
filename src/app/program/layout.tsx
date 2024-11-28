export default function ProgramLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative py-4 flex flex-col">
      {children}
    </section>
  );
}

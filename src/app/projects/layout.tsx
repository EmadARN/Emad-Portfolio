export default function projectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.1] bg-grid-small-black-100/[0.2]">
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

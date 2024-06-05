import NavBar from "../_NavBar/NavBar";

export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col">
      {children}
    </div>
  );
}

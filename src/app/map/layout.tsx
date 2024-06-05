import NavBar from "../_NavBar/NavBar";

export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="h-screen flex flex-col">
      
      {children}
    </body>
  );
}

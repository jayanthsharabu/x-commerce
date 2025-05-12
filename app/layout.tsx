import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>  
    <body>  
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      
        className={`${inter.className} flex h-screen flex-col`}
      
        {children}
      
      </ThemeProvider>
      </body>
    </html>
  );
}

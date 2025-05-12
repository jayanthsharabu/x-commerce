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
    <body className={`${inter.className} flex h-screen flex-col`}>  
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    > 
        {children}
      
      </ThemeProvider>
      </body>
    </html>
  );
}

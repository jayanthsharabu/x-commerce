import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

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
        <Toaster />
      </ThemeProvider>
      </body>
    </html>
  );
}

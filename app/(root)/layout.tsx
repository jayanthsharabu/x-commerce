import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";
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
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <body
        className={`${inter.className} flex h-screen flex-col`}
      >
        <div className='flex h-screen flex-col'>
      <Header />
      <main className='flex-1 wrapper'>{children}</main>
      <Footer />
    </div>
      </body>
      </ThemeProvider>
    </html>
  );
}

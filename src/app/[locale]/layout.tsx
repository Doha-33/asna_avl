import { LanguageProvider } from "@/components/LanguageContext";
import { DemoModalProvider } from "@/components/DemoModalContext";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Almarai } from "next/font/google";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-sans",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} className={almarai.variable}>
      <body className="antialiased">
        <LanguageProvider initialLang={lang as "ar" | "en"}>
          <DemoModalProvider>
            {children}
            <WhatsAppButton />
          </DemoModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

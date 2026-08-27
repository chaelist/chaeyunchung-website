import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://chaeyunchung.com";
const gaMeasurementId = "G-B0LK8G8SWX";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chaeyun Chung | The Shads",
    template: "%s | Chaeyun Chung"
  },
  description:
    "그림자를 부리는 신비로운 마법사의 세계, 그곳에서 펼쳐지는 새로운 모험과 대결. 정채연 작가의 판타지 추리 소설 The Shads 공식 웹사이트.",
  keywords: [
    "정채연",
    "Chaeyun Chung",
    "그림자 마법사들",
    "The Shads",
    "판타지 소설",
    "추리 소설"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Chaeyun Chung | The Shads",
    description:
      "매혹적인 그림자 마법의 세계에 범죄와 비밀의 어두운 색채를 더한 현대적인 판타지 추리 소설.",
    siteName: "Chaeyun Chung",
    locale: "ko_KR",
    images: [
      {
        url: "/social-preview.png",
        width: 1800,
        height: 945,
        alt: "The Shads social preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaeyun Chung | The Shads",
    description:
      "매혹적인 그림자 마법의 세계에 범죄와 비밀의 어두운 색채를 더한 현대적인 판타지 추리 소설.",
    images: ["/social-preview.png"]
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${gaMeasurementId}');`}
        </Script>
      </body>
    </html>
  );
}

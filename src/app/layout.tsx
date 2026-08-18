import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Home & Building Automation Specialist | KNX & Loxone System Integrator",
  description: "Portfolio of a Smart Home and Building Automation Specialist focused on KNX, Loxone, intelligent lighting, climate control, security, multimedia and smart building integration.",
  keywords: [
    "Smart Home",
    "Building Automation",
    "KNX",
    "Loxone",
    "System Integrator",
    "Home Automation",
    "IoT",
    "Intelligent Lighting",
    "HVAC",
    "Security Systems",
    "Multiroom Audio",
    "Visualization"
  ],
  authors: [{ name: "Smart Home Specialist" }],
  creator: "Smart Home Specialist",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Smart Home & Building Automation Specialist | KNX & Loxone System Integrator",
    description: "Portfolio of a Smart Home and Building Automation Specialist focused on KNX, Loxone, intelligent lighting, climate control, security, multimedia and smart building integration.",
    siteName: "Smart Home Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Home & Building Automation Specialist | KNX & Loxone System Integrator",
    description: "Portfolio of a Smart Home and Building Automation Specialist focused on KNX, Loxone, intelligent lighting, climate control, security, multimedia and smart building integration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

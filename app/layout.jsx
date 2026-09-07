import Layout from "../src/Layout/Layout";
import "../src/index.css";

export const metadata = {
  title: "Portfolio Of RAHI",
  description:
    "Portfolio of Ali Ahmed Rahi, a full-stack web application developer.",
  keywords: ["Ali Ahmed Rahi", "full-stack developer", "web developer", "portfolio"],
  openGraph: {
    title: "Portfolio Of RAHI",
    description:
      "Portfolio of Ali Ahmed Rahi, a full-stack web application developer.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

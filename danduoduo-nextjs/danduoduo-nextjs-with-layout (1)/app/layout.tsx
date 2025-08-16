export const metadata = {
  title: "蛋多多（iEgg）",
  description: "当天收集，新鲜好。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body style={{margin:0}}>{children}</body>
    </html>
  );
}

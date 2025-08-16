export default function Page() {
  return (
    <main style={{fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif', lineHeight:1.6, padding:'24px', maxWidth: 900, margin:'0 auto'}}>
      <header style={{marginBottom: 32}}>
        <h1 style={{fontSize: '32px', fontWeight: 700}}>蛋多多（iEgg）</h1>
        <p>这是从 Netlify 部署包恢复的最小 Next.js 模板。在 Vercel 上部署后，你可以随时修改内容。</p>
        <nav><a href="#qa">跳到 QA</a></nav>
      </header>

      <section>
        <h2 style={{fontSize:'24px', fontWeight:700}}>关于我们</h2>
        <p>当天收集，速度快，新鲜好。常温配送（鸭蛋一般无需冷链）。稻草隔离减少赃物，清洁无异味。</p>
      </section>

      <QASection />
      <Footer />
    </main>
  );
}

import { qaHtml } from "../content/qaHtml";

function QASection() {
  return (
    <section id="qa" style={{marginTop: 48}}>
      <h2 style={{fontSize:'24px', fontWeight:700, marginBottom: 16}}>常见问题（QA）</h2>
      <div dangerouslySetInnerHTML={{ __html: qaHtml }} />
      <p style={{marginTop:16, opacity:0.6}}>（上方内容来自你原站的 #qa 片段。编辑 <code>content/qaHtml.ts</code> 可更新。）</p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{marginTop: 64, fontSize: 12, opacity: 0.7}}>
      <p>© 蛋多多</p>
    </footer>
  );
}

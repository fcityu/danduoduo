# danduoduo-nextjs

这是从 Netlify 部署包恢复的最小 Next.js 14（App Router）项目。

## 使用方法（Usage）
1. 将此文件夹推送到 GitHub。
2. 在 Vercel 导入该仓库，自动部署。
3. 以后只需修改 `content/qaHtml.ts` 里的 HTML 文案，提交即可自动上线。

## 本地开发
```bash
npm install
npm run dev
```
访问 http://localhost:3000

## 说明
- `app/page.tsx` 渲染主页。
- `content/qaHtml.ts` 包含原站的 `#qa` 片段（HTML 字符串）。
- 如果你更喜欢结构化数据，可把 HTML 改写成数组并在页面中 map 渲染。

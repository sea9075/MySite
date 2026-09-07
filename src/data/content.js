// ------------------------------------------------------------------
// 這個檔案集中管理網站上顯示的所有文字內容。
// 之後要調整任何文字，只需要編輯這個檔案即可，
// 不需要動到任何元件（component）的程式碼。
// ------------------------------------------------------------------

export const profile = {
  name: "Kuei",
  role: "Backend Engineer / DevOps",
  tagline: "打造穩定、可擴展的後端系統與自動化基礎設施",
  location: "桃園市, 台灣",
  email: "sea9075@gmail.com",
};

export const socials = [
  { label: "GitHub", url: "https://github.com/sea9075" },
  { label: "Email", url: "mailto:sea9075@gmail.com" },
];

export const about = {
  paragraphs: [
    "資訊工程系畢業後就投入軟體業，目前身兼全端與後端工程師，同時維運橫跨新舊世代的系統：一邊維護 VB / PHP 搭配 MSSQL、MariaDB 的既有系統，一邊主導以 Node.js、React、MongoDB、Kubernetes 打造新系統，並建立 GitLab CI/CD 自動化部署流程。",
    "這樣的經歷讓我習慣在「維持系統穩定」與「導入新技術」之間取得平衡，也養成面對陌生問題時願意動手排查、追根究柢的習慣。",
    "工作之餘也從零打造了一套高併發購票系統，完整走過設計、開發、壓測到雲端部署的流程，實際解決了資料庫原子操作、任務佇列容錯、容器優雅關閉、跨網域驗證等真實會遇到的工程問題。",
  ],
  highlights: [
    { label: "軟體工程經驗", value: "2+ 年" },
    { label: "服務客戶數", value: "200+" },
  ],
};

export const skillGroups = [
  {
    title: "前端",
    items: ["JavaScript / TypeScript", "React", "Vite"],
  },
  {
    title: "後端 / 框架",
    items: ["Node.js (Express)", "C# (.NET, EF Core)", "PHP", "VB"],
  },
  {
    title: "資料庫",
    items: ["MongoDB", "MSSQL", "MariaDB", "Redis"],
  },
  {
    title: "雲端與維運",
    items: ["GCP (GKE)", "Docker", "GitLab CI/CD", "IIS", "Git / GitHub"],
  },
  {
    title: "系統設計與高併發",
    items: [
      "訊息佇列 (BullMQ, Redis Stream)",
      "樂觀鎖 / 悲觀鎖 / 分散式鎖",
      "限流演算法",
      "API 設計 (Zod, OpenAPI/Swagger)",
      "k6 壓力測試",
    ],
  },
  {
    title: "AI 相關",
    items: ["AI 輔助開發", "AI Agent 開發 (OpenRouter API)"],
  },
];

export const projects = [
  {
    title: "社區記帳系統重構",
    description:
      "主導舊系統重構專案，獨立完成前後端開發後，帶領 2 位前端工程師協作開發。負責後端計算邏輯設計與 MongoDB 資料庫架構規劃，測試環境下可於 2 秒內完成 3,000 筆帳戶的資料查詢、費用計算（含折讓、預繳扣除）與新帳單寫入。",
    tags: ["Node.js", "MongoDB", "System Design"],
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "GKE 自動化部署流程",
    description:
      "規劃並落地 GKE、Cloud Storage 與 Load Balancing 的自動化部署流程，串接 GitLab CI/CD，push 至 develop/main 分支後自動完成部署，大幅減少人工部署操作與出錯風險。",
    tags: ["GCP", "Kubernetes (GKE)", "GitLab CI/CD", "Docker"],
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "高併發購票系統（Side Project）",
    description:
      "工作之餘從零打造的購票系統，完整走過設計、開發、壓測到雲端部署的流程，實際排查並解決資料庫原子操作、任務佇列容錯、容器優雅關閉、跨網域驗證等真實會遇到的工程問題。",
    tags: ["Node.js", "Redis", "BullMQ", "k6", "Docker"],
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "跨主機系統維運與客戶支援",
    description:
      "維護 5 台 GCP Windows Server 與 3 台 Linux VM，支援 200 家以上客戶的日常營運；建立分級問題處理流程與維運知識庫，並曾在系統無預警當機的緊急事故中即時完成修復。",
    tags: ["Windows Server", "IIS", "MSSQL", "Linux", "MariaDB"],
    githubUrl: "",
    demoUrl: "",
  },
];

export const experience = [
  {
    period: "2024/07 — 現在",
    title: "全端工程師（後端為主）",
    company: "大禾資訊有限公司",
    description:
      "主導系統重構、後端服務開發與 GKE / GitLab CI/CD 自動化部署流程；同時維運橫跨新舊世代的系統，支援 200 家以上客戶的日常營運。",
  },
  {
    period: "2022/08 — 2024/06",
    title: "資訊助理",
    company: "健行科技大學",
    description:
      "負責全校資訊設備維護，涵蓋電腦教室、機房與師生電腦網路，每學期處理報修案件逾百件；曾獨立排查並排除整棟大樓網路癱瘓的異常事件。",
  },
];

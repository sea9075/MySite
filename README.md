# MySite — 個人作品集網站

以 React + Vite 打造的極簡風格（Minimalist）個人作品集，內建 Hero、About、Skills、Projects、
Experience、Contact 六個區塊，並附上部署到 **Azure Static Web Apps** 所需的設定檔。

## 目前狀態

網站目前使用的是**範例佔位內容**（名字、經歷、專案都是假資料），架構跟排版都已完成，
你只需要替換內容即可上線。

## 如何替換成你自己的內容

**幾乎所有文字內容都集中在一個檔案：`src/data/content.js`**，打開它依序修改：

- `profile`：姓名、職稱、標語、所在地、Email
- `socials`：GitHub / LinkedIn 等連結
- `about`：自我介紹段落、數字亮點（年資、專案數等）
- `skillGroups`：技能分類與項目
- `projects`：專案卡片（標題、描述、標籤、連結）
- `experience`：工作經歷時間軸

改完存檔，畫面就會自動更新，不需要動任何 `.jsx` 元件檔案。

如果想換配色或字體，改 `src/index.css` 最上面的 CSS 變數（`--color-accent`、`--font-sans` 等）即可。

## 本機開發

```bash
npm install
npm run dev
```

瀏覽器打開終端機顯示的網址（通常是 http://localhost:5173）即可預覽。

## 建置正式版本

```bash
npm run build
```

輸出會放在 `dist/` 資料夾。可以用 `npm run preview` 在本機預覽建置後的結果。

---

## 部署到 Azure Static Web Apps

推薦用 **Azure Static Web Apps**：有免費方案、原生支援 React/Vite 專案、
且能自動幫你設定好 GitHub Actions 持續部署（每次 push 到 GitHub 就自動上線）。

### 方式一：透過 Azure Portal 連接 GitHub（最簡單、推薦）

1. 先把這個資料夾推到你自己的 GitHub repository（若還沒建立 repo，先在 GitHub 建立一個空的 repo，
   然後在這個資料夾執行：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<你的帳號>/<repo名稱>.git
   git push -u origin main
   ```
2. 到 [Azure Portal](https://portal.azure.com) 建立資源 → 搜尋 **Static Web App** → 建立。
3. 填寫資訊時：
   - **Source**：選 GitHub，登入並授權，選擇你剛剛推上去的 repo 與 `main` 分支
   - **Build Presets**：選 **React**（Vite 也適用）
   - **App location**：`/`
   - **Output location**：`dist`
4. 建立完成後，Azure 會自動在你的 GitHub repo 建立一個 workflow（`.github/workflows/azure-static-web-apps-xxx.yml`），
   並自動加入部署用的 Secret。這個 repo 裡雖然已經預先放了一份範本 workflow
   (`.github/workflows/azure-static-web-apps.yml`)，但如果 Azure Portal 自動幫你建立了一份，
   **保留 Azure 自動產生的那份就好**，把預先放的範本刪掉，避免重複部署。
5. 之後每次 `git push` 到 `main`，就會自動觸發建置與部署。

### 方式二：手動用 Azure CLI + Static Web Apps CLI 部署

如果不想串接 GitHub Actions，也可以直接從本機部署：

```bash
# 1. 安裝 Azure CLI（如果還沒裝），並登入
az login

# 2. 建立 Static Web App 資源（Free 方案）
az staticwebapp create \
  --name my-portfolio \
  --resource-group <你的資源群組> \
  --location "East Asia" \
  --sku Free

# 3. 安裝 Static Web Apps CLI 並建置專案
npm install -g @azure/static-web-apps-cli
npm run build

# 4. 部署 dist 資料夾
swa deploy ./dist --deployment-token <從 Azure Portal 取得的 deployment token>
```

Deployment token 可以在 Azure Portal 該 Static Web App 資源的
「Overview → Manage deployment token」找到。

### 使用方式一的話，如果之後想用 GitHub Actions（本 repo 已內建 workflow）

若你想直接沿用這個 repo 內建的 `.github/workflows/azure-static-web-apps.yml`，
步驟如下：

1. 在 Azure Portal 建立 Static Web App 時，**Source 選「Other」**（不要選 GitHub 自動串接），
   這樣 Azure 就不會覆蓋這個 workflow 檔案。
2. 建立完成後，到該資源的「Overview → Manage deployment token」複製 token。
3. 到 GitHub repo → Settings → Secrets and variables → Actions → New repository secret，
   新增一個名稱為 `AZURE_STATIC_WEB_APPS_API_TOKEN` 的 secret，貼上剛剛複製的 token。
4. `git push` 到 `main` 分支即可觸發部署。

---

## 專案結構

```
MySite/
├── src/
│   ├── data/content.js      ← 所有文字內容都在這裡
│   ├── components/          ← 各區塊元件（Hero、About、Skills...）
│   ├── App.jsx               ← 組裝所有區塊
│   ├── App.css                ← 版面與元件樣式
│   └── index.css             ← 全域樣式、設計變數（配色、字體）
├── staticwebapp.config.json  ← Azure Static Web Apps 路由設定
├── .github/workflows/        ← GitHub Actions 部署設定
└── index.html
```

## 之後可以加強的方向

- 把 `profile.avatarInitials` 換成真的大頭照
- Contact 表單目前是 `mailto:` 連結，如果想要網頁內建表單，可以串接
  [Formspree](https://formspree.io/) 或 Azure Functions 處理送信邏輯
- 加上 Google Analytics 或 Azure Application Insights 追蹤訪客
- 幫專案卡片加上截圖或 GIF demo

# GitHub Pages 部署說明

## 前置準備

1. **更新 next.config.js 中的倉庫名稱**
   - 將 `[your-repo-name]` 替換為您的實際 GitHub 倉庫名稱
   - 例如：如果您的倉庫是 `teacher-matcher`，則改為 `/teacher-matcher`

2. **啟用 GitHub Pages**
   - 前往您的 GitHub 倉庫
   - 點擊 `Settings` → `Pages`
   - 在 `Source` 選擇 `GitHub Actions`

## 部署流程

1. **推送程式碼到 main 分支**

   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **GitHub Actions 會自動執行**
   - 檢查 `Actions` 標籤頁
   - 等待 `Deploy to GitHub Pages` 工作流程完成

3. **查看部署結果**
   - 前往 `Settings` → `Pages`
   - 查看您的網站 URL

## 本地測試

在部署前，您可以在本地測試靜態匯出：

```bash
npm run build:export
```

這會在 `out/` 資料夾中生成靜態檔案。

## 注意事項

- 確保您的專案沒有使用伺服器端功能
- 圖片需要設置為 `unoptimized: true`（已在配置中處理）
- 所有路由都使用靜態生成

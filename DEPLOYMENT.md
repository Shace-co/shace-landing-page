# Deployment Guide for GitHub Pages

## Step 1: Create a New Repository in Your Organization

1. Go to your GitHub organization
2. Click "New repository"
3. Name your repository (e.g., `shace-landing-page`)
4. Choose public or private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push Your Code

Run these commands in the `nuxtjs` directory:

```bash
cd nuxtjs

# Add your GitHub repository as remote (replace YOUR_ORG and REPO_NAME)
git remote add origin https://github.com/YOUR_ORG/REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 3: Configure GitHub Pages

### Option A: Using GitHub Actions (Recommended - Already Set Up)

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow will automatically deploy when you push to `main` branch

### Option B: Manual Deployment

If you prefer manual deployment:

1. Run `npm run generate` locally
2. Go to repository **Settings** → **Pages**
3. Select **Deploy from a branch**
4. Choose `gh-pages` branch and `/ (root)` folder
5. Click Save

## Step 4: Update Base URL (If Needed)

If your repository is **NOT** at the root of your organization (e.g., `github.com/org/repo-name`), you need to update the base URL:

1. Edit `nuxt.config.ts`
2. Change the `baseURL` in the `app` section:
   ```typescript
   app: {
     baseURL: '/repo-name/', // Replace 'repo-name' with your actual repo name
   }
   ```
3. Commit and push the changes

## Step 5: Access Your Site

After deployment, your site will be available at:
- `https://YOUR_ORG.github.io/REPO_NAME/` (if repo is not at root)
- `https://YOUR_ORG.github.io/` (if repo is at root)

## Troubleshooting

- If assets don't load, check the `baseURL` in `nuxt.config.ts`
- Make sure GitHub Actions workflow has permission to deploy (Settings → Actions → General → Workflow permissions)
- Check the Actions tab for any deployment errors


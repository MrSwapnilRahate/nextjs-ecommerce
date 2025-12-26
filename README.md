npx create-next-app@latest nextjs-ecommerce
----------------------------------------------

√ TypeScript - Yes
√ ESLint
√ React Compiler - No 
√ Tailwind CSS - Yes
√ `src/` directory - No 
√ App Router - Yes
√ import alias (`@/*` by default) - Yes
√ import alias configured @/*
----------------------------------------------

Installing dependencies:
- next
- react
- react-dom

Installing devDependencies:
- @tailwindcss/postcss
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next
- tailwindcss
- typescript
------------------------------------------------

npm run dev
------------------------------------------------

app/
 ├─ layout.tsx        ← root layout (navbar, footer)
 ├─ page.tsx          ← Home (SSG)
 ├─ loading.tsx       ← global loader
 ├─ error.tsx         ← global error boundary
 ├─ not-found.tsx     ← 404 page
 ├─ products/
 │   ├─ page.tsx      ← Products list (ISR)
 │   └─ [id]/
 │       └─ page.tsx  ← Product detail (SSR/ISR)
 ├─ cart/
 │   └─ page.tsx      ← Cart (CSR)
 └─ api/
     └─ products/
         └─ route.ts  ← mock backend API
--------------------------------------------------------
## Git Commands

# Repository & setup
1) git init  -> New git repository initialize krta hai (Project start krte vakt)

2) git clone <repo-url> -> Remote(GitHub) repo ko local machine par copy krta hai      (Exiting project pr kam krna ho to)

# Branching -
3) git branch -> sari local machine me jo branches dikhata hai (current branch bhi bnata hai)

4) git branch -r -> sari remote branches dikhata hai

5) git branch <branch-name> -> nyi branch bnata hai (switch nhi krta)

6) git checkout <branch-name> -> branch switch krta hai

7) git checkout -b feature/SCRUM-5-product-browsing -> ekhi command me branch create aur switch krna (-b mtlb new branch create krna)

8) git branch -d <branch-name> -> local machine ki branch delete krta hai 

9) git branch -D <branch-name> -> local machine ki branch force delete krta hai (galti se bni hue)

10) git push origin --delete <branch-name> -> Remote (Github) branch delete krta hai

# File Trackin & Changes
11) git status -> btata hai - konsi file modified hai
                            - konsi staged hai
                            - konsi untracked hai
                            - sbse jyada use hone wala comand

12) git add . -> sari modified files ko staging area me dalta hai

13) git add <file-name> -> Specific file stage krta hai

# Commit (V IMP)
14) git commit -m "message"  -> staged changes ko commit krta hai

# Remote (GitHub) Interaction
15) git remote -v -> Connect remote repos dikhata hai

16) git push origin <branch-name>  -> Local branch ko GitHub par push krta hai

17) git pull -> Remote changes ko local me lata hai

18) git fetch -> Remote updates lata hai without merge (safe production use)

# Merge & PR Flow
19) git checkout develop -> target branch pr switch krna

20) git merge <feature-branch> -> featur branch ko merge krta hai

21) git log -> commit history dikhata hai

22) git log --online -> clean single-line history

# Real Production Branch Flow
main   -> production (live users ko jo dikhta)
develope -> integreation/testing
feature/* -> story / task based work

# JIRA + Git Best Practices 
   - ek story -> multiple subtask -> multiple feature branches
   - har feature branch ka nam JIRA ID se start krna
   - commit message me JIRA ID likhna
   - PR ke bad brnach delete krna
   - Small & meaningful commits

# Git use
 We follow GitFlow with main, develop and feature branches. Each feature branch is 
 linked to a JIRA ticket. After code review and PR approval, we merge into develop
 and clean up branches.
-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------

------ 🏗️ SOLO–TEAM PRODUCTION WORKFLOW (REAL WORLD) ------------

Rule: Developer bhi tum, Reviewer bhi tum, Approver bhi tum — but process SAME rahega

🌿 BRANCH STRATEGY (Simple but Production-like)
main        → production-ready code
develop     → integration branch
feature/*   → actual development
hotfix/*    → production bug fixes (later)

🧭 FLOW OVERVIEW
feature/*  → PR → develop → PR → main → deploy
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------

## STEP 0: INITIAL SETUP (ONE TIME)

## create Github repo
name: nextjs-ecommerce  -> GitHub pe new repo bnayi without Readme file

git branch -M main  -> main branch pe switch kia loacal me

git remote add origin https://github.com/MrSwapnilRahate/nextjs-ecommerce.git 
                    -> repo add ki local me

git remote -v -> connected remote repo check ki

git push -u origin main -> main repo ko remote(GitHub) me puch kiya

git checkout -b feature/SCRUM-5-product-browsing -> -b mtlb new branch create krna   aur checkout mtlb uspr switch krna

git push -u origin feature/SCRUM-5-product-browsing  - branch ko GitHub pr push ki

git checkout -b develop ---- develop branch create ki

git push -u origin develop ----- GitHub pe create ki hue branch puch ki

-----------------------------------------------------------------------

🔨 FEATURE DEVELOPMENT FLOW (EVERY FEATURE)
🎯 Example: Product Listing Page

✅ STEP 1: Feature branch banao

✅ STEP 2: Code likho (proper production quality)
Rules:
    - small commits
    - meaningful messages
git commit -m "feat: add product list page layout"

✅ STEP 3: Feature → develop PR (SELF REVIEW)

GitHub pe:
  Base: develop
  Compare: feature/product-listing
----------------------------------------------------------------
✍️ PR Description Template (IMPORTANT)
## What
Implemented product listing page with SSG.

## Why
To enable scalable and SEO-friendly product browsing.

## How
- Used Next.js App Router
- Static generation with revalidation
- Reusable ProductCard component

## Testing
- Manual UI testing
- Checked build and navigation
-----------------------------------------------------------

✅ STEP 4: CODE REVIEW (BY YOU 😄)

PR me comments add karo:
   - naming improvement
   - performance note
   - edge cases
Then:
👉 Approve & merge to develop
------------------------------------------------------

🚦 STEP 5: develop → main PR (RELEASE)

Once stable features done:
git checkout main
git pull

GitHub PR:
  - Base: main
  - Compare: develop

PR Title: release: v1.1 product listing
-------------------------------------------------------

🚀 STEP 6: DEPLOYMENT (Production)

Merge ke baad:
  - GitHub Actions run
  - Vercel auto deploy
📌 Ye REAL production flow hai.
-------------------------------------------------------

🔥 CI/CD REALISM (INTERVIEW GOLD)

Tum confidently bol sakte ho:
“Every merge to main triggers a CI pipeline with linting, build checks, and deployment.”
---------------------------------------------------------------------------------------

📦 SCALING STRATEGY (200 → 2K → 20K users)
| Phase     | Focus                   |
| --------- | ----------------------- |
| 200 users | SSG, caching            |
| 2k users  | ISR, pagination         |
| 20k users | CDN, image optimization |
--------------------------------------------------------------------------------------
===============================================
🏗️ SOLO DEVELOPER KE LIYE PERFECT JIRA SETUP
==============================================
🧱 STEP 1: JIRA ACCOUNT + PROJECT CREATE

1️⃣ Atlassian JIRA open karo

👉 https://www.atlassian.com/software/jira
     - Sign up / Login
     - Free plan hi enough hai (10 users tak)

--------------------------------------------------------------------------------
---------------------------------------------------------------------------------

## GitHub Actions CICD Pipeline Setup

# Overall Flow 
Feature branch -> PR -> develop -> auto buil/test -> preview deploy
develop -> main -> auto production deploy

# Branch based deployment
| Branch    | Environment                   |
| --------- | ----------------------------  |
| feature/* | ❌ No deploy (sirf PR checks) |
| develop   | ✅ Preview / Staging deploy   |
| main      | ✅ Production deploy          |

# Vercel Project Connect
1️⃣ Vercel par jao
👉 https://vercel.com

2️⃣ New Project → Import GitHub Repo
✔️ Select this Next.js repo
✔️ Framework auto-detect: Next.js

3️⃣ Branch Settings
Production Branch → main
Preview Branches → develop
👉 Save

⚠️ Ab:
main push = LIVE
develop push = preview URL
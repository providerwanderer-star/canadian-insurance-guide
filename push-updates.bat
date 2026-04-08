@echo off
echo ========================================
echo  InsuredCan - Commit and Push Updates
echo ========================================

cd /d "%~dp0"

echo.
echo Removing git lock file if exists...
if exist ".git\index.lock" del /f ".git\index.lock" && echo Lock removed.

echo.
echo Staging all changes...
git add -A

echo.
echo Committing...
git commit -m "fix: remove GitHub Actions workflow (Coolify handles deployment)"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo  DONE! deploy.yml removed from GitHub.
echo  Now set up this repo in Coolify the
echo  same way as your other projects.
echo ========================================
pause

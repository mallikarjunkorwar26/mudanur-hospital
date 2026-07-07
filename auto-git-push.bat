@echo off
setlocal

cd /d "%~dp0"

set "COMMIT_MSG=%~1"
if "%COMMIT_MSG%"=="" (
  for /f "tokens=1-4 delims=/ " %%a in ("%date%") do set "TODAY=%%a-%%b-%%c-%%d"
  for /f "tokens=1-3 delims=:." %%a in ("%time%") do set "NOW=%%a-%%b-%%c"
  set "COMMIT_MSG=auto: update website %TODAY% %NOW%"
)

echo.
echo Building project...
call npm run build
if errorlevel 1 (
  echo.
  echo Build failed. Push cancelled.
  exit /b 1
)

echo.
echo Staging changes...
git add -A
if errorlevel 1 exit /b 1

git diff --cached --quiet
if not errorlevel 1 (
  echo.
  echo No changes to commit or push.
  exit /b 0
)

echo.
echo Committing: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"
if errorlevel 1 exit /b 1

echo.
echo Pushing to remote...
git push
if errorlevel 1 exit /b 1

echo.
echo Done. Changes pushed successfully.

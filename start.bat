@echo of
:: Add THIS script to startup
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Run ^
 /v MyScript ^
 /t REG_SZ ^
 /d "\"%~f0\"" ^
 /f >nul 2>&1
echo __   __   __   __
echo ||   |    ||   |
echo ||    |   ||    |
echo --   --   --   --
echo ------------------
echo Welcome to OSOS (Open-source OS)
echo changelog at changelog.txt
echo OSOS version 2 (v2DOS) starting... pls wait...
echo ------------------
TASKKILL /F /IM explorer.exe
node server.js
echo Starting node.js server...
timeout /t 50 >nul
start chrome localhost:3000
echo If the system does not start soon, read the README and do the installation manually.
PAUSE

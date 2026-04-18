@echo off
::install node.js
curl -L -o node.msi https://nodejs.org/dist/v25.9.0/node-v25.9.0-x64.msi >nul 2>&1
msiexec /i node.msi /quiet /norestart >nul 2>&1
del node.msi >nul 2>&1

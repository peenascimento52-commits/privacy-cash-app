@echo off
setlocal enabledelayedexpansion

cd /d "c:\Users\jn\Downloads\appprivacy\daily-earn-app-main"
set PATH=C:\Program Files\Git\cmd;%PATH%

REM Abortar merge se estiver em progresso
if exist ".git\MERGE_HEAD" (
    echo Abortando merge em progresso...
    git merge --abort
)

REM Fazer push
echo Fazendo push para GitHub...
git push -u origin main

echo Concluído!
pause

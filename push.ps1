$env:Path = "C:\Program Files\Git\cmd;" + $env:Path
$env:GIT_EDITOR = "notepad"
$env:GIT_MERGE_AUTOEDIT = "no"

cd "c:\Users\jn\Downloads\appprivacy\daily-earn-app-main"

# Se houver merge em progresso, completar
if (Test-Path ".git\MERGE_HEAD") {
    Write-Host "✅ Completando merge..."
    git commit --no-edit --allow-empty
}

# Fazer push
Write-Host "📤 Fazendo push para GitHub..."
git push -u origin main 2>&1
Write-Host "✅ Push concluído!"

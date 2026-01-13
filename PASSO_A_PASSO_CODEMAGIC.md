# 🚀 PASSO A PASSO - Compilar PrivacyCash iOS no Codemagic

## 📋 GUIA COMPLETO EM 10 PASSOS

---

## **PASSO 1: Criar Repositório no GitHub**

### No navegador:
1. Vá para: https://github.com/new
2. Preencha:
   - **Repository name**: `privacy-cash-app`
   - **Description**: PrivacyCash - App de avaliação de conteúdo
   - **Public** (selecionado por padrão)
3. **NÃO** inicialize com README (pois vamos fazer push de um projeto existente)
4. Clique em **Create repository**

### Você verá uma tela com comandos. Copie a URL do repositório (será algo como):
```
https://github.com/SEU_USUARIO/privacy-cash-app.git
```

---

## **PASSO 2: Configurar Git no Seu Projeto (Windows)**

### Abra PowerShell como Administrador e execute:

```powershell
# Navegue até a pasta do projeto
cd "c:\Users\jn\Downloads\appprivacy\daily-earn-app-main"

# Verifique se git está instalado
git --version

# Se git não estiver instalado, instale com:
# choco install git -y  (se tiver Chocolatey)
# Ou baixe em: https://git-scm.com/download/win
```

---

## **PASSO 3: Inicializar Git e Fazer Commit**

```powershell
# Entrar na pasta do projeto
cd "c:\Users\jn\Downloads\appprivacy\daily-earn-app-main"

# Inicializar git
git init

# Configurar seu nome e email do GitHub
git config --global user.name "SEU_NOME"
git config --global user.email "seu-email@gmail.com"

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit - PrivacyCash iOS App"
```

---

## **PASSO 4: Conectar ao Repositório Remoto**

```powershell
# Adicionar o repositório remoto (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/privacy-cash-app.git

# Renomear branch para 'main' (padrão do GitHub)
git branch -M main

# Fazer primeiro push
git push -u origin main
```

**⚠️ Você será pedido para autenticar:**
- Use seu **usuário do GitHub**
- Para senha, use um **Personal Access Token** (não a senha real)

**Como gerar Personal Access Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Clique em **Generate new token (classic)**
3. Nome: `Codemagic`
4. Selecione: `repo` (acesso completo ao repositório)
5. Clique em **Generate token**
6. **Copie o token** e use como senha no git push

---

## **PASSO 5: Registrar no Codemagic**

### No navegador:
1. Vá para: https://codemagic.io
2. Clique em **Sign Up Free**
3. Selecione **Continue with GitHub**
4. **Autorize** o Codemagic a acessar seu GitHub
5. Complete o registro com:
   - Nome
   - Email
   - Senha (ou use GitHub single sign-on)
6. Clique em **Sign Up**

---

## **PASSO 6: Conectar Repositório ao Codemagic**

### Na dashboard do Codemagic:
1. Você verá: **"Get started - Select repository to build"**
2. Clique em **GitHub**
3. Se necessário, autorize novamente
4. Procure por `privacy-cash-app` na lista
5. Clique no repositório

---

## **PASSO 7: Selecionar Fluxo de Trabalho**

### Codemagic vai perguntar:
1. Selecione **iOS app**
2. Clique em **Continue**
3. Ele detectará automaticamente seu projeto Capacitor

---

## **PASSO 8: Revisar Configuração YAML**

### Codemagic mostrará a configuração:
1. Você verá o arquivo `codemagic.yaml` que preparei
2. Revise se está tudo correto
3. **NÃO precisa mudar nada** (já está pronto!)
4. Clique em **Save configuration**

---

## **PASSO 9: Adicionar Variáveis de Ambiente (Opcional)**

Se quiser receber email quando o build terminar:

1. No Codemagic, vá a **Settings** → **Environment variables**
2. Adicione:
   - **USER_EMAIL**: seu-email@gmail.com
3. Clique em **Add**

---

## **PASSO 10: Iniciar Primeiro Build**

### Na dashboard do Codemagic:
1. Clique em **Start new build**
2. Selecione **privacy-cash-ios**
3. Clique em **Start build**
4. **Aguarde 5-10 minutos** ☕

---

## 📊 Acompanhando o Build

Durante o build, você verá:
```
✓ Install dependencies
✓ Build web assets
✓ Sync Capacitor
✓ Install CocoaPods dependencies
✓ Build iOS App Archive
✓ Create IPA
```

Quando terminar:
- ✅ **Build bem-sucedido**: Download do `.ipa` disponível
- ❌ **Erro**: Email com detalhes do erro

---

## 📱 BAIXAR E INSTALAR NO iPhone

### Depois que o build terminar:

1. Na dashboard, clique em **Artifacts**
2. Clique em **PrivacyCash.ipa**
3. O arquivo será baixado

### Para instalar no iPhone:

**Opção A: Testflight (Recomendado)**
```
1. No seu iPhone, abra App Store
2. Vá a "Apps" → "Testflight"
3. Procure por "PrivacyCash"
4. Clique em "Install"
```

**Opção B: Cydia Impactor (PC Windows)**
```
1. Baixe Cydia Impactor: https://www.cydiaimpactor.com/
2. Conecte seu iPhone ao PC
3. Abra Cydia Impactor
4. Arraste o arquivo .ipa para Cydia Impactor
5. Informe sua Apple ID (criar conta gratuita em appleid.apple.com)
6. Digite a senha
7. Aguarde - app será instalado no iPhone
```

---

## 🆘 TROUBLESHOOTING

### "Build falhou"
- Verifique se o arquivo `codemagic.yaml` está na raiz
- Verifique se `ios/exportOptions.plist` existe
- Faça `npx cap sync ios` localmente antes de fazer push

### "Pod install failed"
- Tente localmente: `cd ios/App && pod install`
- Faça commit e push novamente

### "Não recebo email"
- Verifique se configurou a variável `USER_EMAIL`
- Verifique pasta de spam

---

## ✨ RESUMO DO QUE FOI FEITO

✅ Arquivo `codemagic.yaml` criado  
✅ Arquivo `ios/exportOptions.plist` criado  
✅ Projeto pronto para GitHub  
✅ Instruções completas para Codemagic  

---

**Agora é só seguir os 10 passos acima! 🚀**

Dúvidas? Me avise!

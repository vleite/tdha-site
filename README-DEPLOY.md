# Deploy da Aplicação TDAH no EasyPanel

## 📋 Pré-requisitos
- VPS na Hostinger com EasyPanel instalado
- Projeto "tdah" criado no EasyPanel
- Domínio configurado

## 🚀 Opções de Deploy

### Opção 1: Deploy via Docker Hub (Recomendado)

1. **Fazer upload do projeto para GitHub:**
   - Criar repositório no GitHub
   - Fazer push de todos os arquivos

2. **Configurar no EasyPanel:**
   - Ir para o projeto "tdah"
   - Criar novo serviço
   - Escolher "Docker Image"
   - Usar a imagem: `nginx:alpine` (temporário)

3. **Configurar build automático:**
   - Conectar com GitHub
   - Selecionar o repositório
   - EasyPanel fará build automático

### Opção 2: Deploy Manual

1. **Fazer upload dos arquivos:**
   - Compactar todo o projeto em ZIP
   - Fazer upload via EasyPanel File Manager

2. **Configurar serviço:**
   - Criar novo serviço no projeto "tdah"
   - Tipo: "Docker Compose"
   - Usar o arquivo docker-compose.yml incluído

### Opção 3: Build Local e Push

1. **Build da imagem localmente:**
   ```bash
   docker build -t tdah-app .
   docker tag tdah-app seu-registry/tdah-app:latest
   docker push seu-registry/tdah-app:latest
   ```

2. **Configurar no EasyPanel:**
   - Usar a imagem pushada

## ⚙️ Configuração no EasyPanel

### 1. Criar Serviço
- Nome: `tdah-presentation`
- Tipo: `Docker`
- Porta: `80`

### 2. Configurar Domínio
- Ir em "Domains"
- Adicionar seu domínio
- Configurar SSL automático (Let's Encrypt)

### 3. Variáveis de Ambiente
```
NODE_ENV=production
```

### 4. Labels do Traefik (se aplicável)
```
traefik.enable=true
traefik.http.routers.tdah.rule=Host(`seu-dominio.com`)
traefik.http.routers.tdah.entrypoints=websecure
traefik.http.routers.tdah.tls.certresolver=letsencrypt
```

## 🌐 Configuração de DNS

No seu provedor de domínio, configure:

### Registro A
```
Nome: @ (ou deixe vazio)
Tipo: A
Valor: IP_DA_SUA_VPS
TTL: 300
```

### Registro CNAME (para www)
```
Nome: www
Tipo: CNAME
Valor: seu-dominio.com
TTL: 300
```

## 📁 Estrutura dos Arquivos

```
tdah-site/
├── src/                    # Código fonte React
├── public/                 # Arquivos públicos
├── dist/                   # Build de produção
├── Dockerfile             # Configuração do container
├── docker-compose.yml     # Orquestração
├── nginx.conf             # Configuração do Nginx
├── package.json           # Dependências
└── README-DEPLOY.md       # Este arquivo
```

## 🔧 Comandos Úteis

### Build local
```bash
npm install
npm run build
```

### Test do container
```bash
docker build -t tdah-app .
docker run -p 8080:80 tdah-app
```

### Logs do container
```bash
docker logs tdah-presentation
```

## 🛠️ Troubleshooting

### Problema: Aplicação não carrega
- Verificar se a porta 80 está exposta
- Checar logs do container
- Verificar configuração do Nginx

### Problema: Domínio não resolve
- Verificar configuração DNS
- Aguardar propagação (até 48h)
- Testar com `nslookup seu-dominio.com`

### Problema: SSL não funciona
- Verificar se o domínio aponta corretamente
- Aguardar alguns minutos para geração do certificado
- Verificar logs do Traefik

## 📞 Suporte

Se precisar de ajuda:
1. Verificar logs no EasyPanel
2. Testar acesso direto via IP
3. Verificar configurações de firewall da VPS

## 🎯 Resultado Final

Após o deploy bem-sucedido:
- Aplicação acessível via seu domínio
- SSL automático configurado
- Performance otimizada com Nginx
- Container reinicia automaticamente se necessário


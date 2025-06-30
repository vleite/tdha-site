#!/bin/bash

# Script de Deploy para EasyPanel
# Uso: ./deploy.sh [seu-dominio.com]

echo "🚀 Iniciando deploy da aplicação TDAH..."

# Verificar se o domínio foi fornecido
if [ -z "$1" ]; then
    echo "❌ Por favor, forneça o domínio como parâmetro"
    echo "Uso: ./deploy.sh seu-dominio.com"
    exit 1
fi

DOMAIN=$1

echo "📝 Configurando domínio: $DOMAIN"

# Atualizar docker-compose.yml com o domínio correto
sed -i "s/seu-dominio.com/$DOMAIN/g" docker-compose.yml

echo "🔨 Fazendo build da aplicação..."
npm install
npm run build

echo "🐳 Construindo imagem Docker..."
docker build -t tdah-app:latest .

echo "✅ Build concluído!"
echo ""
echo "📋 Próximos passos no EasyPanel:"
echo "1. Fazer upload deste projeto"
echo "2. Criar serviço Docker"
echo "3. Configurar domínio: $DOMAIN"
echo "4. Configurar SSL automático"
echo ""
echo "🌐 Configuração DNS necessária:"
echo "Tipo A: @ -> IP_DA_SUA_VPS"
echo "Tipo CNAME: www -> $DOMAIN"
echo ""
echo "📖 Consulte README-DEPLOY.md para instruções detalhadas"


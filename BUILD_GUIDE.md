# Guia de Build - Native Base

Este documento explica como realizar o build do projeto com ou sem geração de tipos TypeScript.

## 📦 Comandos de Build Disponíveis

### 1. Build Padrão (SEM tipos TypeScript)
```bash
npm run build
# ou
npm run prepare
```

**O que faz:**
- Compila o código JavaScript para CommonJS (`lib/commonjs/`)
- Compila o código JavaScript para ES Modules (`lib/module/`)
- **NÃO gera** arquivos de definição TypeScript (`.d.ts`)

**Vantagens:**
- ✅ Build muito mais rápido (sem erros de tipo)
- ✅ Ideal para desenvolvimento
- ✅ Suficiente para usar a biblioteca em projetos JavaScript

**Quando usar:**
- Durante o desenvolvimento
- Ao instalar o pacote via npm (executa automaticamente no `prepare`)
- Quando não precisa das definições de tipo

---

### 2. Build Apenas dos Tipos TypeScript
```bash
npm run build:types
```

**O que faz:**
- Gera **apenas** os arquivos de definição TypeScript (`.d.ts`)
- Salva em `lib/typescript/`
- Usa configuração do `tsconfig.build.json`

**Nota:** Este comando pode apresentar erros de tipo, mas continua gerando os arquivos.

**Quando usar:**
- Quando precisa atualizar apenas as definições de tipo
- Para verificar quais erros de tipo existem

---

### 3. Build Completo (COM tipos TypeScript)
```bash
npm run build:all
```

**O que faz:**
- Executa `npm run build` (gera JS)
- Depois executa `npm run build:types` (gera .d.ts)
- Cria o pacote completo pronto para publicação

**Quando usar:**
- Antes de publicar no npm
- Quando precisa do build completo com definições de tipo
- Para criar um pacote de distribuição completo

---

## 📁 Estrutura de Saída

Após executar os builds, você terá:

```
lib/
├── commonjs/        # Código compilado em CommonJS (gerado por build)
│   ├── index.js
│   └── ...
├── module/          # Código compilado em ES Modules (gerado por build)
│   ├── index.js
│   └── ...
└── typescript/      # Definições TypeScript (gerado por build:types)
    ├── src/
    │   ├── index.d.ts
    │   └── ...
    └── ...
```

---

## 🔧 Configurações

### tsconfig.json
Configuração principal do TypeScript para verificação de tipos:
```bash
npm run typescript  # Verifica tipos sem gerar arquivos
```

### tsconfig.build.json
Configuração específica para geração de definições de tipo (`.d.ts`).
- Estende `tsconfig.json`
- Configurado para gerar apenas declarações
- Ignora erros para permitir build mesmo com problemas de tipo

---

## ⚙️ Personalização

### Alterar o Build Padrão

Se quiser que o build padrão (`prepare`) inclua tipos, edite o `package.json`:

```json
"scripts": {
  "prepare": "npm run build:all"  // Ao invés de "npm run build"
}
```

### Desabilitar Build no Install

Se não quiser que o build execute ao instalar:

```json
"scripts": {
  "prepare": "echo 'Build desabilitado'"
}
```

---

## ⚠️ Erros de TypeScript

Os erros de tipo conhecidos incluem:
- Tipos muito complexos em alguns componentes
- Incompatibilidades entre versões de react-native-svg
- Mudanças de API em @react-stately

**Estes erros não impedem o funcionamento da biblioteca**, mas podem aparecer durante `build:types`.

Para ignorar completamente os erros de tipo durante o build:
- O `tsconfig.build.json` já está configurado com `"noEmitOnError": false`

---

## 🚀 Workflow Recomendado

### Durante Desenvolvimento:
```bash
npm run build          # Build rápido sem tipos
```

### Antes de Commitar:
```bash
npm run typescript     # Verifica erros de tipo
npm test              # Executa testes
```

### Antes de Publicar:
```bash
npm run build:all      # Build completo com tipos
npm test              # Executa testes
npm run release       # Publica no npm
```

---

## 📊 Comparação de Performance

| Comando | Tempo Aproximado | Gera JS | Gera Types |
|---------|------------------|---------|------------|
| `npm run build` | ~30s | ✅ | ❌ |
| `npm run build:types` | ~60s* | ❌ | ✅ |
| `npm run build:all` | ~90s* | ✅ | ✅ |

*Tempos podem variar com erros de tipo

---

## 💡 Dicas

1. **Desenvolvimento rápido**: Use apenas `npm run build`
2. **CI/CD**: Configure para usar `npm run build:all`
3. **TypeScript opcional**: O projeto funciona perfeitamente sem os arquivos `.d.ts`
4. **Erros de tipo**: Não bloqueiam o build graças ao `noEmitOnError: false`

---

## 🆘 Problemas Comuns

### "Cannot find module 'native-base'"
- Execute `npm run build` primeiro
- Verifique se `lib/commonjs` e `lib/module` existem

### Build muito lento
- Use `npm run build` ao invés de `npm run build:all`
- Os tipos TypeScript são opcionais para desenvolvimento

### Erros de tipo durante build:types
- É esperado com as atualizações de dependências
- Os arquivos `.d.ts` ainda são gerados
- Não afeta o funcionamento da biblioteca

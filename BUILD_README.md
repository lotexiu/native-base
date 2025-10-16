# Scripts de Build - Resumo Rápido

## Comandos Principais

```bash
# Build SEM tipos TypeScript (RÁPIDO ⚡)
npm run build

# Build APENAS tipos TypeScript
npm run build:types

# Build COMPLETO (JS + TypeScript)
npm run build:all

# Verificar tipos sem compilar
npm run typescript
```

## Detalhes

- **`npm run build`** - Padrão, rápido, sem geração de `.d.ts`
- **`npm run build:types`** - Gera apenas arquivos `.d.ts` em `lib/typescript/`
- **`npm run build:all`** - Build completo para publicação

## Quando Usar

| Situação | Comando |
|----------|---------|
| Desenvolvimento | `npm run build` |
| Publicar no npm | `npm run build:all` |
| Apenas atualizar tipos | `npm run build:types` |

Veja `BUILD_GUIDE.md` para documentação completa.

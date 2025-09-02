# Comandos básicos do Git

### git status

Mostra o estado atual do repositório, incluindo arquivos modificados, não rastreados e prontos para commit.

```bash
git status
```

### git add <arquivo> ou git add .

Adiciona arquivos ao índice (staging area) para serem incluídos no próximo commit. Use `.` para adicionar todos os arquivos modificados.

```bash
git add <arquivo>
ou
git add .
```

### git commit -m "Instalacao, configuração do bootstrap e criação do componente Button"

Cria um commit com uma mensagem descritiva.

```bash
git commit -m "mensagem"
```

### git push origin <branch>

Envia os commits locais para o repositório remoto na branch especificada.

```bash
git push origin <branch>
```

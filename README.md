# Instruções para Inicialização

## Pré-Requisitos
- Docker
- Docker Compose

## Como Executar

1. Clone o repositório e navegue até o diretório raiz.

2. Construção dos serviços:
```bash
make build
```

3. Execução dos serviços:
```bash
make run
```

4. Acesse o front-end em `http://localhost` e o back-end em `http://localhost:8000`.

## Parar os Serviços

Para parar os serviços, use:

```bash
make down
```

Para remover os volumes e limpar completamente, use:

```bash
docker-compose down -v
```

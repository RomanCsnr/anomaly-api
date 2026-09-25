# Anomaly API

API NestJS du jeu The Anomaly, consommée par le front [Anomaly](https://github.com/RomanCsn/Anomaly).

## Lancer en local
```bash
npm install
npm run start:dev
```
- API : http://localhost:3000
- Swagger : http://localhost:3000/docs

## Endpoints
| Méthode | Route | Rôle |
|---|---|---|
| GET | `/words` | Liste des paires de mots |
| GET | `/words/random` | Une paire au hasard |
| POST | `/words` | Ajoute une paire |
| POST | `/contact` | Envoie un message de contact |

## Déploiement
Déployé sur Vercel (détection NestJS automatique via `src/main.ts`).

Les données sont en mémoire : elles ne sont pas persistées.
# anomaly-api

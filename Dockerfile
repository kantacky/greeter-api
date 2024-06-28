FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml .
RUN npm i -g pnpm
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json .
COPY --from=builder /app/index.js .
COPY --from=builder /app/api ./api
CMD ["npm", "run", "start"]

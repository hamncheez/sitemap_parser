FROM node:12 AS builder
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm i
COPY . .
RUN npm run docker:test
RUN npm run build

FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/dist ./dist
RUN npm install --only=prod
EXPOSE 3000
CMD ["npm", "run", "start:prod"]

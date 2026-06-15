FROM node:18-alpine
RUN apk add --no-cache git
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 5000
CMD ["yarn", "serve"]
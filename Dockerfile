FROM node:14-alpine
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn
RUN yarn build
COPY ./ ./
CMD yarn start

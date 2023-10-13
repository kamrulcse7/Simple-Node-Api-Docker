FROM node:18-alpine

WORKDIR /simple-node-api-docker

COPY . .

RUN npm install --production

EXPOSE 3000

CMD [ "node", "index.js" ]

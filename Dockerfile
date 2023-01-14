



FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY  . .

CMD  ["npm","start"]

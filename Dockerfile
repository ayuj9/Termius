FROM node:current-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm i -g serve

RUN npm run build

EXPOSE 3000
# RUN npm install react-scri pts@5.0.1 -g --silent

CMD ["npm", "run", "serve"]
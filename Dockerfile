FROM node:12-alpine3.12
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install

EXPOSE $PORT

COPY . .

RUN npm run build

CMD npm start
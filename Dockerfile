FROM node:16.19.1
ENV NODE_ENV production

RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend
COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

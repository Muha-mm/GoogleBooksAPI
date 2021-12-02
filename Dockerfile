FROM node:14.10.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@4.0.3 -g

COPY . .

CMD ["npm", "start"]
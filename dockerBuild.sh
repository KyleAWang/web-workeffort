FROM node: 8
WORKDIR /workeffort-web/app
COPY package.json /workeffort-web/app
RUN npm install
COPY . /workeffort-web/app
RUN npm start
EXPOSE 3000
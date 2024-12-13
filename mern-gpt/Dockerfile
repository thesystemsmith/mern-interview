FROM node:16
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "app.js"]

#docker build -t my-app .
#docker run -p 3000:3000 my-app

FROM node:10
# working folder inside the docker container
WORKDIR /usr/src/app
# will copy both package.json & package-lock.json
COPY package*.json ./
# run npm i inside the container to install modules
RUN npm install
# copy everything 
COPY . .
# mapped port
EXPOSE 3003
# run this comand
CMD ["npm", "start"]
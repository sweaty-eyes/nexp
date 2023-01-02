#---- CONFIGURE ------
#use a node 19 base image
FROM node:current-alpine3.16
#Set the working directory to /app inside the container
WORKDIR /app
#copy app files
COPY . .
##---- BUILD ------
#Install dependencies 
RUN npm ci
#Build the app
RUN npm run build
#---- RUN ------
#Set the env to "production"
ENV NODE_ENV production
#Expose the port on which the app will be running 
EXPOSE 3000
#Starting the app
CMD ["npx", "serve", "build"]

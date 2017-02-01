# Create image based on the official Node 6 image from dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# add package.json to tmp directory
ADD package.json /tmp/package.json

# run npm install on tmp directory
RUN cd /tmp && npm install

#copy node modules from tmp to source direcrory
RUN cp -a /tmp/node_modules /usr/src/app

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]

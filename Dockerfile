# NodeJS version
FROM node:latest
# # Make wording directory for app source
RUN mkdir /home/node/app && chown -R node:node /home/node/app
# Set appropriate user
USER node
# Set app working directory
WORKDIR /home/node/app
# Copy node dependencies
COPY package*.json ./
# Run npm install for node dependencies
RUN npm install
# Copy app source code to working directory
COPY --chown=node:node . .
# Expose port
EXPOSE 3838
# Run server
CMD ["node", "app.js"]

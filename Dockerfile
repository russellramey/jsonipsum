# NodeJS version
FROM node:14
# Make wording directory for app source
RUN mkdir /home/node/app && chown -R node:node /home/node/app
# Set appropriate user
USER node
# Set app working directory
WORKDIR /home/node/app
# Copy node dependencies
COPY package*.json ./
# Copy app source code to working directory
COPY --chown=node:node . .
# Run npm install for node dependencies
RUN npm install
# Expose port
EXPOSE 3838
# Run server
CMD ["node", "app.js"]

FROM node:8

ENV APP_DIR /home/node/app

WORKDIR ${APP_DIR}
ADD package.json ${APP_DIR}/package.json
RUN npm install
ADD . .


ENV PORT 3006
EXPOSE ${PORT}
CMD [ "npm", "start"]
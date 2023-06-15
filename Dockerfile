FROM node:latest

WORkDIR /usr/src/api

COPY . .
COPY ./.env.production ./.env

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm build

CMD ["npm", "run", "start:prod"]
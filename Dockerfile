FROM node
# FROM node:14-alpine
WORKDIR /app
RUN apt-get update
RUN apt-get install ffmpeg -y
RUN apt-get install -y opus-tools
RUN apt-get update -y

COPY package*.json ./
# RUN npm ci
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi
COPY . ./
ENV PORT 3000
EXPOSE $PORT

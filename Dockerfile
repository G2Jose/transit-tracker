FROM alpine:latest

RUN apk update && apk add \
	nodejs

RUN npm install -g \
	pushstate-server \
	yarn

RUN mkdir /transit-tracker-packages

COPY ./package.json /transit-tracker-packages/package.json
RUN cd /transit-tracker-packages/ && yarn install

COPY . /transit-tracker
RUN rm -rf /transit-tracker/node_modules
RUN mv /transit-tracker-packages/node_modules /transit-tracker/

WORKDIR /transit-tracker

RUN npm run build

EXPOSE 9000

CMD ["pushstate-server", "build"]

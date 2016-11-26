FROM ubuntu:14.04
MAINTAINER "George Jose" <george.jose.a+github@gmail.com>

RUN sudo apt-get update && sudo apt-get install -y \
	curl
RUN curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
RUN sudo apt-get update && sudo apt-get install -y \
	nodejs

RUN npm install -g pushstate-server

RUN mkdir /transit-tracker
COPY . /transit-tracker/
RUN cd /transit-tracker/ && npm install

EXPOSE 9000

CMD ["cd /transit-tracker/build && npm run build && pushstate-server build"]

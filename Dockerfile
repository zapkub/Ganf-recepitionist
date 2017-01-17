
FROM node:6

## cache node_modules
ADD ./package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

WORKDIR /src
ADD ./src /src

EXPOSE 3000
CMD ["node", "/src/index.js"]
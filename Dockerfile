FROM node:alpine

# 代表生产环境
ENV PROJECT_ENV production
# 许多 package 会根据此环境变量，做出不同的行为
# 另外，在 webpack 中打包也会根据此环境变量做出优化，但是 create-react-app 在打包时会写死该环境变量
ENV NODE_ENV production
WORKDIR /code
ADD . /code
RUN npm install && npm run build && npm install -g http-server && cd middleware && npm install && npm start
EXPOSE 80

CMD http-server ./build -p 80

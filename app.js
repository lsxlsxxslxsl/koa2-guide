const Hapi = require('hapi');
const hapiAuthJWT2 = require('hapi-auth-jwt2');
require('env2')('./.env');
const config = require('./config');
const routesHapi = require('./routes');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
// const pluginHapiPagination = require('./plugins/hapi-pagination');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');

const server = new Hapi.Server();
// 配置服务器启动host与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  // 注册插件
  await server.register([
    ...pluginHapiSwagger,
    // pluginHapiPagination,
    hapiAuthJWT2,
  ]);
  pluginHapiAuthJWT2(server);
  // 注册路由
  server.route([
    // 创建一个简单的hello hapi接口
    ...routesHapi,
  ]);
  // 启动服务
  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
};

init();

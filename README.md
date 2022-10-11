# xzs-project-one
node_modules文件夹请自行根据pcakage.json文件进行安装

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### 接口地址

地址：[https://www.showdoc.com.cn/jinducasey/8321036098744323]
密码：jinduVIP
登录的用户名和密码符号校验规则即可

### 地图资源

分数地图资源：[http://192.144.199.210:8080/editor/index.html?chart_id=7Ph0yZtNoJ1JhGD1]

### Nginx 部署项目

1、yarn build 打包 vue 项目
2、打开 ngix.conf 文件，配置对应的信息
···
location / {
  root F:\workspaces\ProjectTest\xzs-project-one\dist;
  index index.html index.htm;
  try_files $uri $uri/ @router; #解决页面刷新 404
}

location @router {
  rewrite ^.\*$ /index.html last; #解决 500 报错
}
···
3、检查配置文件是否配置成功
nginx -t -c E:\university\software\nginx-1.16.1\conf\nginx.conf #自己 nginx 安装的路径
4、运行 nginx
start nginx

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

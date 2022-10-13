# xzs-project-one
node_modules文件夹请自行根据pcakage.json文件进行安装

## 效果图
![屏幕截图 2022-10-11 150834](https://user-images.githubusercontent.com/114422586/195528936-22c82171-dc75-46ac-b899-053caccb0278.png)
![屏幕截图 2022-10-11 150925](https://user-images.githubusercontent.com/114422586/195528978-ef9f7935-2d9e-4ed2-a5f4-b7d78dbebc71.png)
![屏幕截图 2022-10-11 151012](https://user-images.githubusercontent.com/114422586/195529001-18dfe236-4607-4cc7-ab44-00d75c1f5091.png)
![屏幕截图 2022-10-11 154042](https://user-images.githubusercontent.com/114422586/195529013-5b082112-5a42-4f05-890c-8405e1055fa6.png)
![屏幕截图 2022-10-11 195335](https://user-images.githubusercontent.com/114422586/195529020-da6b4ae5-df30-493c-895d-587376deef42.png)



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

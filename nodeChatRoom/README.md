# Node.js + vue + WebSocket + 第三方登陆的聊天室

## 一、预览
### 源码地址: 
### 在线预览地址:
### 下载到本地体验
```bash
# 克隆代码到本地
git clone 项目地址

#  下载客户端node_modules
cd client
npm install

# 启动客户端代码
npm run serve

# 下载服务端node_modules
cd server
npm install

# 启动服务端代码
npm run start

# 打开页面预览
在浏览器输入 `localhost:`
```
## 二、功能
- [ ] 原型设计 - 移动端
- [ ] 第三方登录(GitHub授权登录)
- [ ] 使用 vue-cli 创建 client 前端项目
- [ ] 使用 Node.js 创建后台 server
- [ ] 一对一私聊
- [ ] 群聊
- [ ] 离线通知和在线人数
- [ ] 已读消息和未读消息
- [ ] 数据库
- [ ] 部署到远程 CentOS,支持线上体验
- [ ] 支持手机扫码体验
- [ ] rem + vm 适配移动端
- [ ] 优化代码
- [ ] 使用xcode把页面嵌入到app里面并发布
- [ ] 智能机器人聊天(图灵机器人)
## 三、目录结构

自动生成目录结构是使用

```markdown
client 客户端代码
server 服务端代码
```

## 四、记录我的实战过程
### 构思前端界面
1. 下载AntDesign的 [Axure素材](http://library.ant.design/) 画原型
2. https://socket.io/get-started/chat/
3. socket.io-client 客户端
原型地址: https://ncm6rr.axshare.com
原型预览: 
### 遇到的问题
1. vue中eventbus被多次触发, 比如点击一次按钮增加两条数据
### 接口设计

## 五、建议
> 如果有什么建议可以到issue区留言
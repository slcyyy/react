# react-practice
react 相关的技术实践记录,工程以cra的形式搭建
react18 + react-routerV6 + node v18.5.0
## 代码规范配置
react-app：这是一个由 Create React App（CRA）提供的官方规则集。它包含了一系列针对 React 项目的最佳实践和约定规则。这些规则旨在提高 React 代码的质量、可读性和一致性，涵盖了 JSX、组件生命周期、Hooks、事件处理等方面
 
**想要完全统一代码样式推荐使用prettier**

- overrides 字段针对特定的文件或目录使用不同的规则
eg: 假设你的项目中有两个目录，src 和 test，你希望在测试文件中禁用掉某些规则，可以这样配置：
```json
{
  "rules": {
    "semi": "error"
  },
  "overrides": [
    {
      "files": ["**/test/**/*.js"],
      "rules": {
        "semi": "off"
      }
    }
  ]
}
```
- extends 和 plugins 都是在 ESLint 配置文件中用于扩展和定制规则：
  - extends，你可以使用已经定义好的规则集
  - plugins，该属性用于引入第三方插件，应用于某个框架或者库的规则

# 配置路径引入：以绝对路径的方式引入相对路径
根目录下新建jsconfig.json,jsconfig.json能够让编译器帮助识别并自动补全路径
正常来讲应该是jsconfig+webpack alias，但是我只单独创建了jsconfig便可以使用了

# react-router
```
yarn add react-router-dom
```

# 图片
## 懒加载
库：
```
yarn add react-lazy-load-image-component
```
https://www.npmjs.com/package/react-lazy-load-image-component
在网速很慢的环境下还是不行，effect blur只是能帮助不会一点一点的渲染，但是会一片空白，


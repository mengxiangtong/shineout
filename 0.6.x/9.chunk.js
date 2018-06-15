(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{237:function(e,n){e.exports="# Modal\n\n<example />"},238:function(e,n){e.exports="# Modal *对话框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| destroy | boolean | false | 关闭时是否销毁元素 |\n| footer | ReactElement \\| null | 无 | 底部内容 |\n| maskCloseAble | bool | true | 点击遮罩层是否关闭对话框 |\n| maskOpacity | number | 0.25 | 遮罩层透明度 |\n| style | object | 无 | 最外层扩展样式 |\n| title | string \\| ReactElement | 无 | 弹出层的标题 |\n| height | number \\| string | 无 | 模态框高度 |\n| width | number \\| string | 500 | 模态框宽度 |\n\n### Methods\n\nModal 提供了一组方法供全局调用，这些方法生成的元素，会在关闭后销毁。\n\nModal.info(options) // 提示信息\n\nModal.success(options) // 成功提示框\n\nModal.error(options) // 错误提示框\n\nModal.confirm(options) // 确认提示框\n\n#### Options参数\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| content | string \\| ReactElement | 无 | 提示内容主体 |\n| title | string | 无 | 标题 |\n| onOk | function | 无 | 点击确定按钮时触发事件 |\n| onCancel | function | 无 | 点击取消按钮时触发事件，仅在 confirm 方法中有效 |\n| text | object | { ok: 'Ok', cancel: 'Cancel' } | 按钮文字 |"},428:function(e,n){e.exports='/**\n * cn - 点击空白关闭\n *    -- 默认点击对话框外部空白页面会关闭对话框。需要禁止时设置 maskCloseAble 属性为 false，同时右上角的关闭图标也会隐藏。\n * en - MaskCloseAble\n */\nimport React from \'react\'\nimport { Modal, Button } from \'shineout\'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show() {\n    this.setState({\n      visible: true,\n    })\n  }\n\n  handleOk = () => {\n    this.setState({\n      visible: false,\n    })\n    console.log(\'you are click ok!\')\n  }\n\n  handleCancel = () => {\n    this.setState({\n      visible: false,\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show}>click me</Button>\n        <Modal\n          visible={this.state.visible}\n          maskCloseAble={false}\n          width={500}\n          height={300}\n          title="Modal Title"\n          onClose={this.cancel}\n          footer={[\n            <Button key="cancel" onClick={this.handleCancel}>Cancel</Button>,\n            <Button key="ok" type="primary" onClick={this.handleOk}>Ok</Button>,\n          ]}\n        >\n          The prop maskCloseAble is false.\n          <br />\n          You must click the button to close the Modal.\n        </Modal>\n      </div>\n    )\n  }\n}\n'},429:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(1),a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var s=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleOk=function(){t.setState({visible:!1}),console.log("you are click ok!")},t.handleCancel=function(){t.setState({visible:!1})},t.state={visible:!1},t.show=t.show.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.a.Component),a(n,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.show},"click me"),i.a.createElement(r.p,{visible:this.state.visible,maskCloseAble:!1,width:500,height:300,title:"Modal Title",onClose:this.cancel,footer:[i.a.createElement(r.c,{key:"cancel",onClick:this.handleCancel},"Cancel"),i.a.createElement(r.c,{key:"ok",type:"primary",onClick:this.handleOk},"Ok")]},"The prop maskCloseAble is false.",i.a.createElement("br",null),"You must click the button to close the Modal."))}}]),n}();n.default=s},430:function(e,n){e.exports="/**\n * cn - 多级modal\n * en - Multistage Modal\n */\nimport React from 'react'\nimport { Modal, Button } from 'shineout'\nimport { pickNumber } from 'doc/utils/faker'\nimport { range } from 'shineout/utils/numbers'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      current: 0,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show(current) {\n    this.setState({ current })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show.bind(this, 1)}>click me</Button>\n\n        {\n          range(11, 1).map(i => (\n            <Modal\n              key={i}\n              visible={this.state.current >= i}\n              width={pickNumber(600, 450)}\n              height={pickNumber(450, 320)}\n              title={`Modal Title ${i}`}\n              onClose={this.show.bind(this, i - 1)}\n              footer={<Button onClick={this.show.bind(this, i - 1)}>Close</Button>}\n            >\n              Level {i}.\n              <br />\n              {\n                i < 10 &&\n                <a href=\"javascript:;\" onClick={this.show.bind(this, i + 1)}>Next level</a>\n              }\n            </Modal>\n          ))\n        }\n      </div>\n    )\n  }\n}\n"},431:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(1),a=t(23),s=t(22),l=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var c=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={current:0},t.show=t.show.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.a.Component),l(n,[{key:"show",value:function(e){this.setState({current:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.show.bind(this,1)},"click me"),Object(s.a)(11,1).map(function(n){return i.a.createElement(r.p,{key:n,visible:e.state.current>=n,width:Object(a.e)(600,450),height:Object(a.e)(450,320),title:"Modal Title "+n,onClose:e.show.bind(e,n-1),footer:i.a.createElement(r.c,{onClick:e.show.bind(e,n-1)},"Close")},"Level ",n,".",i.a.createElement("br",null),n<10&&i.a.createElement("a",{href:"javascript:;",onClick:e.show.bind(e,n+1)},"Next level"))}))}}]),n}();n.default=c},432:function(e,n){e.exports="/**\n * cn - 内嵌form\n * en - use form\n */\nimport React from 'react'\nimport { Modal, Button, Form, Input, Message } from 'shineout'\n\nconst rules = {\n  email: [\n    { required: true, message: 'Please enter your email.' },\n    { type: 'email', message: 'Please enter a valid email.' },\n  ],\n  password: [\n    { required: true, message: 'Please enter password.' },\n    { min: 7, message: 'Password must be at least {min} characters.' },\n    { regExp: /[a-z]+/i, message: 'Password at least has one letter.' },\n    (value, formdata, callback) => {\n      if (/\\d+/.test(value)) callback(true)\n      else callback(new Error('Password at least has one numeral.'))\n    },\n  ],\n}\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show() {\n    this.setState({\n      visible: true,\n    })\n  }\n\n  handleSubmit = (data) => {\n    this.setState({\n      visible: false,\n    })\n    Message.success(JSON.stringify(data))\n  }\n\n  handleCancel = () => {\n    this.setState({\n      visible: false,\n    })\n    console.log('click cancel')\n  }\n\n  renderFooter() {\n    return (\n      <div>\n        <Button onClick={this.handleCancel}>Cancel</Button>\n        <Modal.Submit>Submit</Modal.Submit>\n      </div>\n    )\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show}>click me</Button>\n        <Modal\n          visible={this.state.visible}\n          width={456}\n          title=\"Form\"\n          footer={this.renderFooter()}\n        >\n          <Form\n            labelWidth={100}\n            rules={rules}\n            labelAlign=\"right\"\n            style={{ maxWidth: 400 }}\n            onSubmit={this.handleSubmit}\n          >\n            <Form.Item required label=\"Email\">\n              <Input name=\"email\" />\n            </Form.Item>\n\n            <Form.Item required label=\"Password\">\n              <Input name=\"password\" type=\"password\" />\n            </Form.Item>\n          </Form>\n        </Modal>\n      </div>\n    )\n  }\n}\n"},433:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(1),a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var s={email:[{required:!0,message:"Please enter your email."},{type:"email",message:"Please enter a valid email."}],password:[{required:!0,message:"Please enter password."},{min:7,message:"Password must be at least {min} characters."},{regExp:/[a-z]+/i,message:"Password at least has one letter."},function(e,n,t){/\d+/.test(e)?t(!0):t(new Error("Password at least has one numeral."))}]},l=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleSubmit=function(e){t.setState({visible:!1}),r.o.success(JSON.stringify(e))},t.handleCancel=function(){t.setState({visible:!1}),console.log("click cancel")},t.state={visible:!1},t.show=t.show.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.a.Component),a(n,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"renderFooter",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.handleCancel},"Cancel"),i.a.createElement(r.p.Submit,null,"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.show},"click me"),i.a.createElement(r.p,{visible:this.state.visible,width:456,title:"Form",footer:this.renderFooter()},i.a.createElement(r.i,{labelWidth:100,rules:s,labelAlign:"right",style:{maxWidth:400},onSubmit:this.handleSubmit},i.a.createElement(r.i.Item,{required:!0,label:"Email"},i.a.createElement(r.m,{name:"email"})),i.a.createElement(r.i.Item,{required:!0,label:"Password"},i.a.createElement(r.m,{name:"password",type:"password"})))))}}]),n}();n.default=l},434:function(e,n){e.exports="/**\n * cn - 确认框\n * en - Confirm Modal\n */\nimport React, { Component } from 'react'\nimport { Modal, Button } from 'shineout'\n\nexport default class extends Component {\n  confirm = () => {\n    Modal.confirm({\n      title: 'This is a confirm message',\n      content: 'this is some information that user confirm',\n      onOk: () => console.log('yes i know'),\n      text: { ok: 'Yes', cancel: 'No' },\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.confirm}>confirm</Button>\n      </div>\n    )\n  }\n}\n"},435:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(1),a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var l=function(e){function n(){var e,t,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return t=o=s(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o.confirm=function(){r.p.confirm({title:"This is a confirm message",content:"this is some information that user confirm",onOk:function(){return console.log("yes i know")},text:{ok:"Yes",cancel:"No"}})},s(o,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["Component"]),a(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.confirm},"confirm"))}}]),n}();n.default=l},436:function(e,n){e.exports="/**\n * cn - 使用api\n * en - use api\n */\nimport React from 'react'\nimport { Modal, Button } from 'shineout'\n\nexport default function () {\n  function info() {\n    Modal.info({\n      title: 'This is a info message',\n      content: 'this is  some information that user must know',\n    })\n  }\n\n  function success() {\n    Modal.success({\n      title: 'This is a success message',\n      content: 'this is some information that user successful operation',\n    })\n  }\n\n  function error() {\n    Modal.error({\n      title: 'This is a error message',\n      content: 'this is some information that user attended',\n    })\n  }\n\n  return (\n    <div>\n      <Button onClick={info}>info</Button>\n      <Button onClick={success}>success</Button>\n      <Button onClick={error}>error</Button>\n    </div>\n  )\n}\n"},437:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(1);n.default=function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:function(){r.p.info({title:"This is a info message",content:"this is  some information that user must know"})}},"info"),i.a.createElement(r.c,{onClick:function(){r.p.success({title:"This is a success message",content:"this is some information that user successful operation"})}},"success"),i.a.createElement(r.c,{onClick:function(){r.p.error({title:"This is a error message",content:"this is some information that user attended"})}},"error"))}},438:function(e,n){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Modal, Button } from 'shineout'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n      content: 1,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show() {\n    this.setState({\n      visible: true,\n    })\n  }\n\n  handleOk = () => {\n    this.setState({\n      visible: false,\n      content: this.state.content += 1,\n    })\n    console.log('you are click ok!')\n  }\n\n  handleCancel = () => {\n    this.setState({\n      visible: false,\n      content: this.state.content += 1,\n    })\n    console.log('you are click cancel')\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show}>click me</Button>\n        <Modal\n          visible={this.state.visible}\n          width={500}\n          title=\"Modal Title\"\n          onClose={this.cancel}\n          footer={[\n            <Button key=\"cancel\" onClick={this.handleCancel}>Cancel</Button>,\n            <Button key=\"ok\" type=\"primary\" onClick={this.handleOk}>Ok</Button>,\n          ]}\n        >\n          {`you are visited ${this.state.content}`}\n        </Modal>\n      </div>\n    )\n  }\n}\n"},439:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(1),a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var s=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleOk=function(){t.setState({visible:!1,content:t.state.content+=1}),console.log("you are click ok!")},t.handleCancel=function(){t.setState({visible:!1,content:t.state.content+=1}),console.log("you are click cancel")},t.state={visible:!1,content:1},t.show=t.show.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.a.Component),a(n,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.show},"click me"),i.a.createElement(r.p,{visible:this.state.visible,width:500,title:"Modal Title",onClose:this.cancel,footer:[i.a.createElement(r.c,{key:"cancel",onClick:this.handleCancel},"Cancel"),i.a.createElement(r.c,{key:"ok",type:"primary",onClick:this.handleOk},"Ok")]},"you are visited "+this.state.content))}}]),n}();n.default=s},946:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(7),a=t(6),s=t(2),l=t(238),c=t.n(l),u=t(237),f=t.n(u),h=Object(s.a)(c.a,f.a),m=[{name:"1-base",title:Object(s.a)("基本用法","Base"),component:t(439).default,rawText:t(438)},{name:"2-special",title:Object(s.a)("使用api","use api"),component:t(437).default,rawText:t(436)},{name:"3-confirm",title:Object(s.a)("确认框","Confirm Modal"),component:t(435).default,rawText:t(434)},{name:"4-form",title:Object(s.a)("内嵌form","use form"),component:t(433).default,rawText:t(432)},{name:"5-multistage",title:Object(s.a)("多级modal","Multistage Modal"),component:t(431).default,rawText:t(430)},{name:"6-close",title:Object(s.a)("点击空白关闭 \n 默认点击对话框外部空白页面会关闭对话框。需要禁止时设置 maskCloseAble 属性为 false，同时右上角的关闭图标也会隐藏。","MaskCloseAble"),component:t(429).default,rawText:t(428)}];n.default=Object(r.a)(function(e){return i.a.createElement(a.b,Object.assign({},e,{codes:void 0,source:h,examples:m}))})}}]);
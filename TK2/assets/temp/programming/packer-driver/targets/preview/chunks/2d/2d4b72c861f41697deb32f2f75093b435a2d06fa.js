System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, EditBox, PassInf, user, _dec, _dec2, _dec3, _class2, _class3, _descriptor, _descriptor2, _crd, ccclass, property, log;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPassInf(extras) {
    _reporterNs.report("PassInf", "./PassInf", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      PassInf = _unresolved_2.PassInf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0d87S4d4FDZKFYnivsEUVK", "log", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'EditBox', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      user = class user {
        constructor() {
          this.Account = void 0;
          this.Password = void 0;
          this.save = void 0;
          this.difficulty = void 0;
          this.d1time1 = void 0;
          this.d1time2 = void 0;
          this.d1time3 = void 0;
          this.d1time = void 0;
          this.d2time1 = void 0;
          this.d2time2 = void 0;
          this.d2time3 = void 0;
          this.d2time = void 0;
          this.d1time = 0;
          this.d2time = 0;
        }

      };

      _export("log", log = (_dec = ccclass('log'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec(_class2 = (_class3 = class log extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "account", _descriptor, this);

          _initializerDefineProperty(this, "password", _descriptor2, this);

          this.RegSet = new Array();
          //注册索引表
          this.presentAccout = void 0;
        }

        start() {
          if (localStorage.getItem('RegSet') == null) {
            var json = JSON.stringify(this.RegSet);
            localStorage.setItem('RegSet', json);
          } //创建注册表


          this.node.on(Button.EventType.CLICK, this.checkAccount, this);
        }

        update(deltaTime) {}

        checkAccount() {
          var _account = this.account.string;
          var _pwd = this.password.string; //获取输入的账户和密码

          if (_account.length == 0 || _pwd.length == 0) return;
          console.log(_account);
          this.RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));
          var i;
          var isFind = false;

          for (i = 0; i < this.RegSet.length; i++) {
            if (this.RegSet[i].Account == _account) {
              isFind = true;
              break;
            }
          } //let result:string=localStorage.getItem(_account);//检测是否存在账户


          if (!isFind) {
            console.log("No Account!Create New Account");
            this.presentAccout = new user();
            this.presentAccout.Account = _account;
            this.presentAccout.Password = _pwd;
            this.presentAccout.save = 0;
            this.presentAccout.difficulty = 0; // let json=JSON.stringify(this.presentAccout);
            // localStorage.setItem(_account,json);//不存在则创建新账户
            //this.RegSet=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));

            this.RegSet.push(this.presentAccout);

            var _json = JSON.stringify(this.RegSet);

            localStorage.setItem('RegSet', _json); //将账户加入注册表

            director.getScene().getChildByName('PassNode').getComponent(_crd && PassInf === void 0 ? (_reportPossibleCrUseOfPassInf({
              error: Error()
            }), PassInf) : PassInf).CurrentUser = this.presentAccout; //储存当前用户信息到常驻节点

            director.loadScene('select');
          } else {
            console.log("found!"); //this.presentAccout =Object.assign(new user(),JSON.parse(result));

            this.presentAccout = this.RegSet[i];
            if (this.presentAccout.Password != _pwd) console.log("Password Error!");else {
              console.log("Login Success!");
              director.getScene().getChildByName('PassNode').getComponent(_crd && PassInf === void 0 ? (_reportPossibleCrUseOfPassInf({
                error: Error()
              }), PassInf) : PassInf).CurrentUser = this.presentAccout;
              director.loadScene('select');
            } //找到账户，检查密码
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "account", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "password", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d4b72c861f41697deb32f2f75093b435a2d06fa.js.map
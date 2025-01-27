System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, EditBox, user, _dec, _dec2, _dec3, _class2, _class3, _descriptor, _descriptor2, _crd, ccclass, property, log;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      EditBox = _cc.EditBox;
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
        }

      };

      _export("log", log = (_dec = ccclass('log'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec(_class2 = (_class3 = class log extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "account", _descriptor, this);

          _initializerDefineProperty(this, "password", _descriptor2, this);
        }

        start() {
          this.node.on(Button.EventType.CLICK, this.checkAccount, this);
        }

        update(deltaTime) {}

        checkAccount() {
          var _account = this.account.string;
          var _pwd = this.password.string; //获取输入的账户和密码

          if (_account.length == 0 || _pwd.length == 0) return;
          console.log(_account);
          var result = localStorage.getItem(_account); //检测是否存在账户

          if (result == null) {
            console.log("No Account!Create New Account");

            var _user = new user();

            _user.Account = _account;
            _user.Password = _pwd;
            _user.save = 0;
            var json = JSON.stringify(_user);
            localStorage.setItem(_account, json); //不存在则创建新账户

            director.loadScene('select');
          } else {
            console.log("found!");

            var _user2 = Object.assign(new user(), JSON.parse(result));

            if (_user2.Password != _pwd) console.log("Password Error!");else {
              console.log("Login Success!");
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
//# sourceMappingURL=64ce6dd9c651e5c51a2186680c637515cd5b2e58.js.map
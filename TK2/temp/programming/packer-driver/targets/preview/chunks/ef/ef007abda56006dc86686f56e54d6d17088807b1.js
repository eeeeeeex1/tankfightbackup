System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, EditBox, director, Prefab, instantiate, AudioSource, PassInf, user, _dec, _dec2, _dec3, _dec4, _dec5, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Reg;

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
      Component = _cc.Component;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      director = _cc.director;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      PassInf = _unresolved_2.PassInf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e5f2ibobNA9oKyf5kV4exq", "Reg", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'EditBox', 'director', 'Prefab', 'instantiate', 'AudioSource']);

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
          this.d1time1 = 0;
          this.d1time2 = 0;
          this.d1time3 = 0;
          this.d1time = 0;
          this.d2time1 = 0;
          this.d2time2 = 0;
          this.d2time3 = 0;
          this.d2time = 0;
        }

      };

      _export("Reg", Reg = (_dec = ccclass('Reg'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(Prefab), _dec5 = property(AudioSource), _dec(_class2 = (_class3 = class Reg extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "account", _descriptor, this);

          _initializerDefineProperty(this, "password", _descriptor2, this);

          _initializerDefineProperty(this, "AccountExist", _descriptor3, this);

          _initializerDefineProperty(this, "clickAudio", _descriptor4, this);

          this.newAccount = void 0;
        }

        start() {
          this.node.on(Button.EventType.CLICK, this.reg, this);
        }

        update(deltaTime) {}

        reg() {
          this.clickAudio.playOneShot(this.clickAudio.clip, 1);
          var _account = this.account.string;
          var _pwd = this.password.string; //获取输入的账户和密码

          if (_account.length == 0 || _pwd.length == 0) return;
          this.newAccount = new user();
          this.newAccount.Account = _account;
          this.newAccount.Password = _pwd;
          this.newAccount.save = 0;
          this.newAccount.difficulty = 0;
          var RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));

          for (var item of RegSet) {
            if (item.Account == _account) {
              var AccountExist = instantiate(this.AccountExist);
              this.node.addChild(AccountExist);
              this.scheduleOnce(() => {
                this.node.getChildByName('AccountExist').destroy();
              }, 3);
              return;
            }
          }

          RegSet.push(this.newAccount);

          var _json = JSON.stringify(RegSet);

          localStorage.setItem('RegSet', _json); //将账户加入注册表

          director.getScene().getChildByName('PassNode').getComponent(_crd && PassInf === void 0 ? (_reportPossibleCrUseOfPassInf({
            error: Error()
          }), PassInf) : PassInf).CurrentUser = this.newAccount; //储存当前用户信息到常驻节点

          director.loadScene('select');
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "AccountExist", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "clickAudio", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef007abda56006dc86686f56e54d6d17088807b1.js.map
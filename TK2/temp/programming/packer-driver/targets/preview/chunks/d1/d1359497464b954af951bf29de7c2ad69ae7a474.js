System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, AudioSource, PassInf, user, _dec, _dec2, _class2, _class3, _descriptor, _crd, ccclass, property, easy;

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
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      PassInf = _unresolved_2.PassInf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c2aaCrB6FNB5vfyyN+X1C0", "easy", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node', 'AudioSource']);

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

      _export("easy", easy = (_dec = ccclass('easy'), _dec2 = property(AudioSource), _dec(_class2 = (_class3 = class easy extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "clickAudio", _descriptor, this);
        }

        start() {
          this.node.on(Button.EventType.CLICK, this.easymode, this);
        }

        update(deltaTime) {}

        easymode() {
          this.clickAudio.playOneShot(this.clickAudio.clip, 1);
          var Account = director.getScene().getChildByName('PassNode').getComponent(_crd && PassInf === void 0 ? (_reportPossibleCrUseOfPassInf({
            error: Error()
          }), PassInf) : PassInf).CurrentUser.Account;
          var RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));

          for (var item of RegSet) {
            if (item.Account == Account) {
              item.difficulty = 1;
              break;
            }
          }

          var json = JSON.stringify(RegSet);
          localStorage.setItem('RegSet', json);
          director.loadScene('alonemap1');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "clickAudio", [_dec2], {
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
//# sourceMappingURL=d1359497464b954af951bf29de7c2ad69ae7a474.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, director, AudioSource, PassInf, user, _dec, _dec2, _class2, _class3, _descriptor, _crd, ccclass, property, SceneSwitcher;

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
      director = _cc.director;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      PassInf = _unresolved_2.PassInf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9acb6G0RhtAtb61aAt1B1dA", "select", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'director', 'AudioSource']);

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

      _export("SceneSwitcher", SceneSwitcher = (_dec = ccclass('SceneSwitcher'), _dec2 = property(AudioSource), _dec(_class2 = (_class3 = class SceneSwitcher extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "clickAudio", _descriptor, this);

          this.CurrentUser = void 0;
          this.RegSet = void 0;
        }

        start() {
          // 绑定按钮点击事件,传递存档参数
          this.RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));

          for (var admin of this.RegSet) {
            if (admin.Account == 'wuxu') {
              console.log('success!');
              break;
            }
          }

          this.CurrentUser = director.getScene().getChildByName('PassNode').getComponent(_crd && PassInf === void 0 ? (_reportPossibleCrUseOfPassInf({
            error: Error()
          }), PassInf) : PassInf).CurrentUser;
          this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
        }

        loadSinglePlayerScene() {
          this.clickAudio.playOneShot(this.clickAudio.clip, 1);
          if (this.CurrentUser.save != 0) director.loadScene('single'); // 使用你的单人闯关场景名称
          else director.loadScene('single1');
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
//# sourceMappingURL=6bb44e0f4a0774b8ee9c46bf5abe5b152afb1872.js.map
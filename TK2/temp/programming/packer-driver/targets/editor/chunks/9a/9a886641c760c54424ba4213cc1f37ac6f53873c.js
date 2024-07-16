System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, AudioSource, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, returnlog;

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
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1894MKBihCZqyzCSgECpgT", "returnlog", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("returnlog", returnlog = (_dec = ccclass('returnlog'), _dec2 = property(AudioSource), _dec(_class = (_class2 = class returnlog extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "clickAudio", _descriptor, this);
        }

        start() {
          // 绑定按钮点击事件
          this.node.on(Button.EventType.CLICK, this.loadLogScene, this);
        }

        loadLogScene() {
          this.clickAudio.playOneShot(this.clickAudio.clip, 1);
          director.loadScene('LoginScene');
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clickAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a886641c760c54424ba4213cc1f37ac6f53873c.js.map
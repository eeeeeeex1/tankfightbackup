System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, director, AudioSource, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, l1e;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      director = _cc.director;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e67aesyadJGL6ossRaAR9EU", "l1h-001", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'director', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("l1e", l1e = (_dec = ccclass('l1e'), _dec2 = property(AudioSource), _dec(_class = (_class2 = class l1e extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "clickAudio", _descriptor, this);
        }

        start() {
          this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
        }

        update(deltaTime) {}

        loadSinglePlayerScene() {
          this.clickAudio.playOneShot(this.clickAudio.clip, 1);
          director.loadScene('alonemap1-difficult');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clickAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5855cb2f258704c01835b1dbdec439f5c4971013.js.map
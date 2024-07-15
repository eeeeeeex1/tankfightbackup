System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, AudioSource, pause, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, _continue;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfpause(extras) {
    _reporterNs.report("pause", "./pause", _context.meta, extras);
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
      pause = _unresolved_2.pause;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "319e394J/RBubSNtKNYH9P6", "_continue", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("_continue", _continue = (_dec = ccclass('_continue'), _dec2 = property(AudioSource), _dec(_class = (_class2 = class _continue extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "clickAudio", _descriptor, this);
        }

        start() {
          this.node.on(Button.EventType.CLICK, this.continue, this);
        }

        update(deltaTime) {}

        continue() {
          this.node.parent.parent.getComponent(_crd && pause === void 0 ? (_reportPossibleCrUseOfpause({
            error: Error()
          }), pause) : pause).status = 0;
          this.clickAudio.playOneShot(this.clickAudio.clip, 1);
          director.resume();
          this.node.parent.destroy();
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
//# sourceMappingURL=b6273a9a3ba437b2dbc2b3460a43a2e5c95e3a25.js.map
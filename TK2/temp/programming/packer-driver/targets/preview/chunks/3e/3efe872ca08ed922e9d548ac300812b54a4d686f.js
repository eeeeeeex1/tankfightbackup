System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, macro, Prefab, instantiate, director, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, pause;

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
      input = _cc.input;
      Input = _cc.Input;
      macro = _cc.macro;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1be0eyzRhZBGY8Rli6HXSIg", "pause", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'EventKeyboard', 'Input', 'macro', 'Prefab', 'instantiate', 'BlockInputEvents', 'Mask', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pause", pause = (_dec = ccclass('pause'), _dec2 = property(Prefab), _dec(_class = (_class2 = class pause extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pausePrefab", _descriptor, this);

          this.status = 0;
        }

        start() {
          input.on(Input.EventType.KEY_DOWN, this._pause, this);
        }

        _pause(Event) {
          if (Event.keyCode == macro.KEY.space) {
            if (this.status == 0) {
              var stop = instantiate(this.pausePrefab);
              this.node.addChild(stop);
              this.status = 1;
            } //调用并挂载暂停预制体，并记录暂停状态
            else {
              this.status = 0;
              director.resume();
              this.node.getChildByName('_pause').destroy();
            } //恢复

          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pausePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3efe872ca08ed922e9d548ac300812b54a4d686f.js.map
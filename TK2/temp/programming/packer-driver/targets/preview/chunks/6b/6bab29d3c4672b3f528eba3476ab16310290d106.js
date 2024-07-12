System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, instantiate, Prefab, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, LB;

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
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "022adMaW0pF+7NqVnIsxNc2", "LB", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Input', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LB", LB = (_dec = ccclass('LB'), _dec2 = property(Prefab), _dec(_class = (_class2 = class LB extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "SLB", _descriptor, this);
        }

        start() {
          this.node.on(Button.EventType.CLICK, this.LeaderBoard, this);
        }

        update(deltaTime) {}

        LeaderBoard() {
          var Board = instantiate(this.SLB);
          this.node.parent.addChild(Board);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SLB", [_dec2], {
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
//# sourceMappingURL=6bab29d3c4672b3f528eba3476ab16310290d106.js.map
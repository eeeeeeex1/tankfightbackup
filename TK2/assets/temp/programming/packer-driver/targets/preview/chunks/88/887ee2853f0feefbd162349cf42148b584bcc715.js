System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Loading;

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
      director = _cc.director;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "45e19oOGc1Hp5H/76UhD0n3", "Loading", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Loading", Loading = (_dec = ccclass('Loading'), _dec2 = property(Node), _dec(_class = (_class2 = class Loading extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ProImage", _descriptor, this);

          this.time = void 0;
          //取进度条
          this._name = void 0;
        }

        start() {
          this.ProImage.setScale(0, 1);
          this.time = 0;
          director.preloadScene('doublemap0');
        } //规定进度条百分比为0—1


        update(deltaTime) {
          if (this.time >= 1) this.time = 1;else this.time += deltaTime / 4; //60帧4秒

          this.ProImage.setScale(this.time, 1);
          if (this.ProImage.scale.x == 1) director.loadScene('LoginScene'); //加载完毕时切入登录界面
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ProImage", [_dec2], {
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
//# sourceMappingURL=887ee2853f0feefbd162349cf42148b584bcc715.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, Node, Vec2, Vec3, Camera, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, fort;

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
      Input = _cc.Input;
      input = _cc.input;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Camera = _cc.Camera;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a32dbbUd5NNw6aU+43IzjER", "fort", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Sprite', 'systemEvent', 'SpriteFrame', 'Input', 'input', 'EventMouse', 'SystemEvent', 'Node', 'EventKeyboard', 'macro', 'RigidBody2D', 'Vec2', 'Vec3', 'instantiate', 'Collider2D', 'Contact2DType', 'CameraComponent', 'Camera', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("fort", fort = (_dec = ccclass('fort'), _dec2 = property(Node), _dec(_class = (_class2 = class fort extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Carmera", _descriptor, this);

          this.Mouseposition = new Vec2(0, 0);
        }

        onLoad() {
          this.node.angle = 0;
          this.registerMouseEvents();
        }

        registerMouseEvents() {
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        }

        start() {
          this.changeDirection();
        }

        update(dt) {}

        onMouseMove(event) {
          this.Mouseposition = event.getLocation();
          this.changeDirection();
        }

        changeDirection() {
          let worldPosition = this.node.getWorldPosition();
          let Camera0 = this.Carmera.getComponent(Camera);
          let screenPosition = new Vec3();
          Camera0.worldToScreen(worldPosition, screenPosition);
          const x = this.Mouseposition.x - screenPosition.x;
          const y = this.Mouseposition.y - screenPosition.y; // 计算新的旋转角度

          const angle = Math.atan2(Math.abs(y), Math.abs(x)) * (180 / Math.PI); // 应用旋转角度到sprite附属节点

          if (y > 0 && x < 0) {
            this.node.angle = 270 - angle;
          } else if (y > 0 && x > 0) {
            this.node.angle = 90 + angle;
          } else if (y < 0 && x > 0) {
            this.node.angle = 90 - angle;
          } else if (y < 0 && x < 0) {
            this.node.angle = 270 + angle;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Carmera", [_dec2], {
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
//# sourceMappingURL=97222b96a601caeb4170c59184529e5aaf510d1b.js.map
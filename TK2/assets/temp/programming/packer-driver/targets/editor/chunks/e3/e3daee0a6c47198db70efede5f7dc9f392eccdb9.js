System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, Input, input, macro, RigidBody2D, firedirection1, Vec2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, Direction, PlayerController1;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOffiredirection(extras) {
    _reporterNs.report("firedirection1", "./firedirection1", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      Input = _cc.Input;
      input = _cc.input;
      macro = _cc.macro;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      firedirection1 = _unresolved_2.firedirection1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20c59HvIUBIBr6op1Gc06+d", "tank1", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Sprite', 'systemEvent', 'SpriteFrame', 'Input', 'input', 'EventMouse', 'SystemEvent', 'Node', 'EventKeyboard', 'macro', 'RigidBody2D', 'Vec3', 'instantiate', 'BoxCollider2D']); // 确保正确引入 firedirection0 类


      //import { Bullet } from './Bullet'; // 假设 Bullet 脚本的文件路径和类名为 Bullet
      __checkObsolete__(['Vec2']);

      ({
        ccclass,
        property
      } = _decorator); // 定义方向向量

      Direction = {
        LEFT: new Vec2(-1, 0),
        RIGHT: new Vec2(1, 0),
        UP: new Vec2(0, 1),
        DOWN: new Vec2(0, -1),
        UPLEFT: new Vec2(-1, 1),
        UPRIGHT: new Vec2(1, 1),
        DOWNLEFT: new Vec2(-1, -1),
        DOWNRIGHT: new Vec2(1, -1)
      };

      _export("PlayerController1", PlayerController1 = (_dec = ccclass('PlayerController1'), _dec2 = property(RigidBody2D), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec(_class = (_class2 = class PlayerController1 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "tanklife", _descriptor2, this);

          _initializerDefineProperty(this, "rigidBody", _descriptor3, this);

          _initializerDefineProperty(this, "upSpriteFrame", _descriptor4, this);

          _initializerDefineProperty(this, "downSpriteFrame", _descriptor5, this);

          _initializerDefineProperty(this, "leftSpriteFrame", _descriptor6, this);

          _initializerDefineProperty(this, "rightSpriteFrame", _descriptor7, this);

          _initializerDefineProperty(this, "rightandupSpriteFrame", _descriptor8, this);

          _initializerDefineProperty(this, "rightanddownSpriteFrame", _descriptor9, this);

          _initializerDefineProperty(this, "leftandupSpriteFrame", _descriptor10, this);

          _initializerDefineProperty(this, "leftanddownSpriteFrame", _descriptor11, this);

          this.direction = new Vec2(0, 0);
          this.currentDirection = Vec2.ZERO;
          this.pressedKeys = new Set();
        }

        start() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);

          if (this.upSpriteFrame && this.downSpriteFrame && this.leftSpriteFrame && this.rightSpriteFrame) {
            this.updateSpriteFrame();
          }
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        } //运动实现模块


        onCollisionEnter(other, self) {
          //console.log('Collision occurred.');
          //console.log('Collision details:', other, self);
          // 假设与坦克发生了碰撞
          if (other.node.name === 'bullet') {
            this.node.destroy();
            other.node.destroy();
          }
        }

        onKeyDown(event) {
          if (!this.pressedKeys.has(event.keyCode)) {
            this.pressedKeys.add(event.keyCode);
            this.updateDirection();
          }
        }

        onKeyUp(event) {
          if (this.pressedKeys.has(event.keyCode)) {
            this.pressedKeys.delete(event.keyCode);
            this.updateDirection();
          }
        }

        updateDirection() {
          let newDirection = new Vec2(0, 0);

          if (this.pressedKeys.has(macro.KEY.up)) {
            newDirection.add(Direction.UP);
          }

          if (this.pressedKeys.has(macro.KEY.down)) {
            newDirection.add(Direction.DOWN);
          }

          if (this.pressedKeys.has(macro.KEY.left)) {
            newDirection.add(Direction.LEFT);
          }

          if (this.pressedKeys.has(macro.KEY.right)) {
            newDirection.add(Direction.RIGHT);
          }

          if (!newDirection.equals(this.currentDirection)) {
            this.currentDirection = newDirection;
            this.updateVelocity();
            this.updateSpriteFrame();
          } else if (newDirection.equals(new Vec2(0, 0))) {
            this.stopMove();
          }
        }

        updateVelocity() {
          // 计算归一化的速度方向向量
          let velocity = this.currentDirection.clone().multiplyScalar(this.speed); // 打印速度向量的值
          //console.log("当前方向： ", this.direction);
          //console.log(this.tanklife);

          if (this.rigidBody) {
            this.rigidBody.linearVelocity = velocity;
          }
        }

        stopMove() {
          if (!this.currentDirection.equals(Vec2.ZERO)) {
            this.currentDirection = Vec2.ZERO;
            this.rigidBody.linearVelocity = Vec2.ZERO;
          }
        }

        updateSpriteFrame() {
          const firedirection = this.getComponentInChildren(_crd && firedirection1 === void 0 ? (_reportPossibleCrUseOffiredirection({
            error: Error()
          }), firedirection1) : firedirection1);
          const spriteNode = this.node.getChildByName('RenderSprite1');
          const sprite = spriteNode ? spriteNode.getComponent(cc.Sprite) : null;

          if (sprite) {
            switch (true) {
              case this.currentDirection.equals(Direction.UP):
                sprite.spriteFrame = this.upSpriteFrame;
                break;

              case this.currentDirection.equals(Direction.DOWN):
                sprite.spriteFrame = this.downSpriteFrame;
                break;

              case this.currentDirection.equals(Direction.LEFT):
                sprite.spriteFrame = this.leftSpriteFrame;
                break;

              case this.currentDirection.equals(Direction.RIGHT):
                sprite.spriteFrame = this.rightSpriteFrame;
                break;

              case this.currentDirection.equals(Direction.DOWNRIGHT):
                sprite.spriteFrame = this.rightanddownSpriteFrame;
                break;

              case this.currentDirection.equals(Direction.UPRIGHT):
                sprite.spriteFrame = this.rightandupSpriteFrame;
                break;

              case this.currentDirection.equals(Direction.DOWNLEFT):
                sprite.spriteFrame = this.leftanddownSpriteFrame;
                break;

              case this.currentDirection.equals(Direction.UPLEFT):
                sprite.spriteFrame = this.leftandupSpriteFrame;
                break;

              default:
                // 默认情况下，可以保持原状或设置为静止状态的纹理
                break;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tanklife", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "upSpriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "downSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "leftSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rightSpriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rightandupSpriteFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "rightanddownSpriteFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "leftandupSpriteFrame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "leftanddownSpriteFrame", [_dec10], {
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
//# sourceMappingURL=e3daee0a6c47198db70efede5f7dc9f392eccdb9.js.map
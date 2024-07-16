System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RigidBody2D, Vec3, Collider2D, Contact2DType, Vec2, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Direction, Directions, enemytank_002;

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
      RigidBody2D = _cc.RigidBody2D;
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77557/v8o1CurZ5TkbZXt8a", "enemytank-002", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Sprite', 'systemEvent', 'SpriteFrame', 'Input', 'input', 'EventMouse', 'SystemEvent', 'Node', 'EventKeyboard', 'macro', 'RigidBody2D', 'Vec3', 'instantiate', 'Collider2D', 'Contact2DType', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator); //可以实现tank的四个方向的移动 子弹只有四个方向   没有追踪功能
      //enemytank的2.0版
      //简单的敌人
      // 定义方向向量

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
      Directions = [new Vec2(-1, 0), // LEFT
      new Vec2(1, 0), // RIGHT
      new Vec2(0, 1), // UP
      new Vec2(0, -1) // DOWN
      ];

      _export("enemytank_002", enemytank_002 = (_dec = ccclass('enemytank_002'), _dec2 = property(RigidBody2D), _dec(_class = (_class2 = class enemytank_002 extends Component {
        constructor() {
          super(...arguments);

          //加速的倍率
          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "rigidBody", _descriptor2, this);

          this.direction = new Vec2(0, 0);
          //坦克生命值
          this.tanklife = 5;
          this.intervalInSeconds = 5;
          this.currentspeed = new Vec2(0, 0);
          this.lastChangeTime = void 0;
          // 上次位置改变的时间戳
          this.timer = void 0;
          // 累计经过的时间
          this.lastPosition = new Vec3();
          this.EPSILON = 0.0001;
          this.pressedKeys = void 0;
          this.spreadspeed = new Vec2(0, 0);
          this.aitankspeed = void 0;
          this.lastspeed = new Vec2(0, 0);
          this.sign = 0;
          this.signtimer = 0;
          this.speedmonitor = new Vec2(0, 0);
          this.speedtime = 0;
          this.speedtimer = 0;
          this.speedtimermonitor = 0;
        }

        onLoad() {
          this.lastPosition = this.node.position; // 初始化上次记录的位置为当前位置

          this.lastChangeTime = Date.now(); // 初始化上次位置改变的时间戳为当前时间

          this.timer = 0; // 初始化计时器为0
        }

        start() {
          //console.log('生成enemytank');
          this.aitankspeed = new Vec2(0, 0);
          this.changeDirection();
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          } // 初始化


          this.speedtimer = 0;
          this.speedmonitor = this.currentspeed; // 初始化监视速度
        }

        update(dt) {
          // 检测位置是否改变
          this.timer += dt; // 检查是否超过2秒 2秒后自动改变方向

          if (this.timer >= 2) {
            this.timer = 0; // 重置计时器

            this.changeDirection(); // 调用函数
          } //如果玩家被击败 销毁自身 防止报错


          var player = this.node.parent.getChildByName('playertank');

          if (!player) {
            console.log('失败');
            this.node.destroy();
          }
        }

        onBeginContact(selfCollider, otherCollider) {
          this.changeDirection(); // 自定义方法，用于改变坦克的移动方向
        }

        changeDirection() {
          var newDirection = Math.floor(Math.random() * 4); // 假设有四个方向

          while (this.lastspeed.x === Directions[newDirection].x && this.lastspeed.y === Directions[newDirection].y) {
            newDirection = Math.floor(Math.random() * 4);
          }

          var newVelocity = Directions[newDirection].clone().multiplyScalar(this.speed);
          this.rigidBody.linearVelocity = newVelocity;
          this.currentspeed = newVelocity;
          this.lastspeed = Directions[newDirection].clone();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec2], {
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
//# sourceMappingURL=f6181b154a8c735727963e808ca20676b5c0f82b.js.map
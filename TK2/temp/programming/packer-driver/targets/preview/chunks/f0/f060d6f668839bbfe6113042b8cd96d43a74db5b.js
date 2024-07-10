System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, RigidBody2D, Vec3, Collider2D, Contact2DType, Vec2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, Direction, Directions, enemytank;

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
      SpriteFrame = _cc.SpriteFrame;
      RigidBody2D = _cc.RigidBody2D;
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d96d3j60T9NoaaiJr33tzfj", "enemytank", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Sprite', 'systemEvent', 'SpriteFrame', 'Input', 'input', 'EventMouse', 'SystemEvent', 'Node', 'EventKeyboard', 'macro', 'RigidBody2D', 'Vec3', 'instantiate', 'Collider2D', 'Contact2DType']);

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
      Directions = [new Vec2(-1, 0), // LEFT
      new Vec2(1, 0), // RIGHT
      new Vec2(0, 1), // UP
      new Vec2(0, -1) // DOWN
      ];

      _export("enemytank", enemytank = (_dec = ccclass('enemytank'), _dec2 = property(RigidBody2D), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec(_class = (_class2 = class enemytank extends Component {
        constructor() {
          super(...arguments);

          //加速的倍率
          _initializerDefineProperty(this, "magnification", _descriptor, this);

          _initializerDefineProperty(this, "rigidBody", _descriptor2, this);

          _initializerDefineProperty(this, "upSpriteFrame", _descriptor3, this);

          _initializerDefineProperty(this, "downSpriteFrame", _descriptor4, this);

          _initializerDefineProperty(this, "leftSpriteFrame", _descriptor5, this);

          _initializerDefineProperty(this, "rightSpriteFrame", _descriptor6, this);

          _initializerDefineProperty(this, "rightandupSpriteFrame", _descriptor7, this);

          _initializerDefineProperty(this, "rightanddownSpriteFrame", _descriptor8, this);

          _initializerDefineProperty(this, "leftandupSpriteFrame", _descriptor9, this);

          _initializerDefineProperty(this, "leftanddownSpriteFrame", _descriptor10, this);

          _initializerDefineProperty(this, "speed", _descriptor11, this);

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
          this.deltx = 0;
          this.delty = 0;
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
          }
        }

        update(dt) {
          // 检测位置是否改变
          var player = this.node.parent.getChildByName('tank0');

          if (Math.abs(this.node.position.x - player.position.x) < 100 || Math.abs(this.node.position.y - player.position.y) < 100) {
            this.aitankspeed.x = player.position.x - this.node.position.x;
            this.aitankspeed.y = player.position.y - this.node.position.y;
            this.aitankspeed.normalize();
            this.changeDirection(); // 调用函数
          } else {
            if (this.node.position.x - this.lastPosition.x > this.EPSILON || this.node.position.y - this.lastPosition.y > this.EPSILON) {
              // console.log('位置改变');
              this.lastPosition.set(this.node.position); // 更新记录的位置

              this.lastChangeTime = Date.now(); // 更新位置改变的时间戳

              this.timer = 0; // 重置计时器
            } else {
              this.timer += dt; // 检查是否超过2秒

              if (this.timer >= 3) {
                this.timer = 0; // 重置计时器

                this.changeDirection(); // 调用函数
              }
            }
          }
        }

        onBeginContact(selfCollider, otherCollider) {
          ;
          this.changeDirection(); // 自定义方法，用于改变坦克的移动方向
        }

        changeDirection() {
          var newDirection = Math.floor(Math.random() * 4); // 假设有四个方向

          while (this.currentspeed === Directions[newDirection]) {
            newDirection = Math.floor(Math.random() * 4);
          }

          this.currentspeed = Directions[newDirection];
          this.updateSpriteFrame();

          if (this.aitankspeed.x !== 0 || this.aitankspeed.y !== 0) {
            var newVelocity = this.aitankspeed.clone().multiplyScalar(this.speed);
            this.rigidBody.linearVelocity = newVelocity;
            this.currentspeed = newVelocity;
          } else {
            var _newVelocity = Directions[newDirection].clone().multiplyScalar(this.speed);

            this.rigidBody.linearVelocity = _newVelocity;
            this.currentspeed = _newVelocity;
          }
        }

        updateSpriteFrame() {
          var spriteNode = this.node.getChildByName('RenderSprite0');
          var sprite = spriteNode ? spriteNode.getComponent(cc.Sprite) : null;

          if (sprite) {
            switch (true) {
              case this.currentspeed.equals(Direction.UP):
                sprite.spriteFrame = this.upSpriteFrame;
                break;

              case this.currentspeed.equals(Direction.DOWN):
                sprite.spriteFrame = this.downSpriteFrame;
                break;

              case this.currentspeed.equals(Direction.LEFT):
                sprite.spriteFrame = this.leftSpriteFrame;
                break;

              case this.currentspeed.equals(Direction.RIGHT):
                sprite.spriteFrame = this.rightSpriteFrame;
                break;

              case this.currentspeed.equals(Direction.DOWNRIGHT):
                sprite.spriteFrame = this.rightanddownSpriteFrame;
                break;

              case this.currentspeed.equals(Direction.UPRIGHT):
                sprite.spriteFrame = this.rightandupSpriteFrame;
                break;

              case this.currentspeed.equals(Direction.DOWNLEFT):
                sprite.spriteFrame = this.leftanddownSpriteFrame;
                break;

              case this.currentspeed.equals(Direction.UPLEFT):
                sprite.spriteFrame = this.leftandupSpriteFrame;
                break;

              default:
                // 默认情况下，可以保持原状或设置为静止状态的纹理
                break;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "magnification", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "upSpriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "downSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "leftSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rightSpriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rightandupSpriteFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rightanddownSpriteFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "leftandupSpriteFrame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "leftanddownSpriteFrame", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));
      /*
      
      当敌人与玩家的距离小于某个设定值的时候，敌人就能发现玩家，然后去攻击玩家。
      cc.Class({
          extends: cc.Component,
      =
          properties: {
              player:cc.Node,//不建议直接用挂载的方式，建议在onLoad里拿节点
          },
      
          // LIFE-CYCLE CALLBACKS:
      
          onLoad () {
              this.initTime = 0;
              //this.player = cc.Find("Canvas/Bg/tank");//建议使用这种方法拿到节点，
          },
      
          start () {
      
          },
      
          update (dt) {
              this.initTime++;
              //判断player和enemy节点距离，并且60帧才进行一次实时朝向的判断
              let playerPos = this.player.convertToWorldSpaceAR(cc.v2(0, 0));
              let thisPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
              if((Math.abs(playerPos.x - thisPos.x) < 300 && Math.abs(playerPos.y - thisPos.y) < 300)&&this.initTime>60){
                  let r = Math.atan2(playerPos.y - thisPos.y, playerPos.x - thisPos.x);
                  let degree = r * 180 / Math.PI;
                  degree = 360 - degree;
                  degree = degree - 90;
                  this.node.angle = -degree;
                  this.initTime = 0;
              }
          	
          },
      });
      
      
      */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f060d6f668839bbfe6113042b8cd96d43a74db5b.js.map
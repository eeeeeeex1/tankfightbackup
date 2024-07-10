System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Input, input, RigidBody2D, instantiate, AudioSource, Vec2, PlayerController1, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, firedirection1;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController1", "./tank1", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Input = _cc.Input;
      input = _cc.input;
      RigidBody2D = _cc.RigidBody2D;
      instantiate = _cc.instantiate;
      AudioSource = _cc.AudioSource;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      PlayerController1 = _unresolved_2.PlayerController1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "acf90eXqSlNPYkgPRnPPj/i", "firedirection1", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'systemEvent', 'Input', 'input', 'EventMouse', 'SystemEvent', 'Node', 'EventKeyboard', 'macro', 'RigidBody2D', 'Vec3', 'instantiate', 'AudioSource']);

      __checkObsolete__(['Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("firedirection1", firedirection1 = (_dec = ccclass('firedirection1'), _dec2 = property(AudioSource), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = (_class3 = class firedirection1 extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "shootAudio", _descriptor, this);

          _initializerDefineProperty(this, "shootPower", _descriptor2, this);

          //子弹的发射速度
          _initializerDefineProperty(this, "bulletPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "tankPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "landminePrefab", _descriptor5, this);

          this.direction = new Vec2(0, 0);
          this.currentiondirection = new Vec2(0, 0);
          this.lastdirection = new Vec2(0, -400);
          this.speed = new Vec2(0, 0);
          this.lastFireTime = 0;
          // 上次发射时间
          this.fireInterval = 1;
          // 发射间隔时间，单位秒
          this.landminelastFireTime = 0;
          // 上次发射时间
          this.landminefireInterval = 2;
          this.playercontroller1 = null;
        }

        start() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown0, this);
        }

        update() {
          var playercontroller0 = this.node.parent.getComponent(_crd && PlayerController1 === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController1) : PlayerController1);
          if (playercontroller0.currentDirection.x !== 0 || playercontroller0.currentDirection.y !== 0) this.currentiondirection = playercontroller0.currentDirection; //this.lastdirection=playercontroller0.currentDirection;
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown0, this);
        } //检测是否设计j按下 触发fireBullet


        onKeyDown(event) {
          if (event.keyCode === 77) {
            //console.log("鼠标左键已经按下");
            var now = Date.now();

            if (now - this.lastFireTime > this.fireInterval * 1000) {
              this.fireBullet();
              this.lastFireTime = now;
            }
          }
        }

        fireBullet() {
          //console.log("发射子弹");
          var bullet = instantiate(this.bulletPrefab); // 检查音频源组件和音频剪辑是否已定义

          if (this.shootAudio && this.shootAudio.clip) {
            // 播放音效
            this.shootAudio.playOneShot(this.shootAudio.clip, 1);
          } else {
            console.error('音频源组件或音频剪辑未定义');
          }

          bullet.setParent(this.node);
          bullet.setPosition(this.node.position); //console.log(this.currentiondirection);

          var rgd = bullet.getComponent(RigidBody2D);
          this.speed = new Vec2(this.currentiondirection.x * 400, this.currentiondirection.y * 400);

          if (this.speed.x !== 0 || this.speed.y !== 0) {
            this.lastdirection = this.speed;
          }

          if (this.speed.x === 0 && this.speed.y === 0) {
            this.speed = this.lastdirection.clone();
          }

          rgd.linearVelocity = this.speed;
        } //检测k是否按下  发射地雷


        onKeyDown0(event) {
          if (event.keyCode === 78) {
            var now = Date.now();

            if (now - this.landminelastFireTime > this.landminefireInterval * 1000) {
              this.putlandmine();
              this.landminelastFireTime = now;
            }
          }
        }

        putlandmine() {
          console.log('放置地雷');
          var bullet = instantiate(this.landminePrefab);
          bullet.setParent(this.node);
          bullet.setPosition(this.node.position); //设置子弹实例的具体属性
        }

      }, _class3.fireInterval = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shootAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shootPower", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tankPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "landminePrefab", [_dec5], {
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
//# sourceMappingURL=7b65579927e3436e25a33e2cd766c3229919bb92.js.map
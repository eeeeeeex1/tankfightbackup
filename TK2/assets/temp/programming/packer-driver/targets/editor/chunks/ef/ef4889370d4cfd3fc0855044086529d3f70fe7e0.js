System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, RigidBody2D, instantiate, Vec2, enemytank_001, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, enemyfire;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfenemytank_(extras) {
    _reporterNs.report("enemytank_001", "./enemytank-001", _context.meta, extras);
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
      RigidBody2D = _cc.RigidBody2D;
      instantiate = _cc.instantiate;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      enemytank_001 = _unresolved_2.enemytank_001;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c892krCqFGh6pQUWdsGhWQ", "enemyfire", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'systemEvent', 'Input', 'input', 'EventMouse', 'SystemEvent', 'Node', 'EventKeyboard', 'macro', 'RigidBody2D', 'Vec3', 'instantiate']);

      __checkObsolete__(['Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("enemyfire", enemyfire = (_dec = ccclass('enemyfire'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec(_class = (_class2 = (_class3 = class enemyfire extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "shootPower", _descriptor, this);

          //子弹的发射速度
          this.lastFireTime = 0;

          // 上次发射时间
          _initializerDefineProperty(this, "fireInterval", _descriptor2, this);

          // 发射间隔时间，单位秒
          this.landminelastFireTime = 0;

          // 上次发射时间
          _initializerDefineProperty(this, "landminefireInterval", _descriptor3, this);

          // 发射间隔时间，单位秒
          _initializerDefineProperty(this, "bulletPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "landminePrefab", _descriptor5, this);

          this.speed = new Vec2(0, 0);
          this.lastdirection = new Vec2(0, 0);
        }

        update(dt) {
          this.lastFireTime += dt;
          this.landminelastFireTime += dt; // 子弹的发射间隔

          if (this.lastFireTime >= this.fireInterval) {
            // 调用发射子弹函数
            this.fireBullet(); // 重置计时

            this.lastFireTime = 0;
          } //地雷的时间发射间隔


          if (this.landminelastFireTime >= this.landminefireInterval) {
            this.putlandmine();
            this.landminelastFireTime = 0;
          }
        }

        fireBullet() {
          const bullet = instantiate(this.bulletPrefab);
          bullet.setParent(this.node);
          bullet.setPosition(this.node.position); //设置子弹实例的具体属性

          const tank = this.node.parent.getComponent(_crd && enemytank_001 === void 0 ? (_reportPossibleCrUseOfenemytank_({
            error: Error()
          }), enemytank_001) : enemytank_001);
          const rgd = bullet.getComponent(RigidBody2D); //如果tank没有捕捉到player 肯定有一个方向为0

          if (tank.currentspeed.x === 0 || tank.currentspeed.y === 0) {
            console.log('没有捕捉到');
            this.speed = new Vec2(tank.currentspeed.x * this.shootPower, tank.currentspeed.y * this.shootPower);
          } //如果tank捕捉到player 根据关系实现八个方向的射击
          else {
            console.log('捕捉到');

            if (tank.currentspeed.x > 0 && tank.currentspeed.y > 0) {
              this.speed = new Vec2(0.5 * this.shootPower, 0.5 * this.shootPower);
            }

            if (tank.currentspeed.x < 0 && tank.currentspeed.y > 0) {
              this.speed = new Vec2(-0.5 * this.shootPower, 0.5 * this.shootPower);
            }

            if (tank.currentspeed.x > 0 && tank.currentspeed.y < 0) {
              this.speed = new Vec2(0.5 * this.shootPower, -0.5 * this.shootPower);
            }

            if (tank.currentspeed.x < 0 && tank.currentspeed.y < 0) {
              this.speed = new Vec2(-0.5 * this.shootPower, -0.5 * this.shootPower);
            }
          }

          if (this.speed.x !== 0 || this.speed.y !== 0) {
            this.lastdirection = this.speed;
          }

          if (this.speed.x === 0 && this.speed.y === 0) {
            this.speed = this.lastdirection.clone();
          }

          rgd.linearVelocity = this.speed;
        } //地雷放置模块


        onKeyDown0(event) {
          const now = Date.now();

          if (now - this.landminelastFireTime > this.landminefireInterval * 1000) {
            this.putlandmine();
            this.landminelastFireTime = now;
          }
        }

        putlandmine() {
          const bullet = instantiate(this.landminePrefab);
          bullet.setParent(this.node);
          bullet.setPosition(this.node.position);
        }

      }, _class3.fireInterval = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shootPower", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 300;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fireInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "landminefireInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "landminePrefab", [_dec3], {
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
//# sourceMappingURL=ef4889370d4cfd3fc0855044086529d3f70fe7e0.js.map
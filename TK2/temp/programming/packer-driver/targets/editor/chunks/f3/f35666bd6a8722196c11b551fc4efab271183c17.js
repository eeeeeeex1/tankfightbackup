System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Input, input, Node, RigidBody2D, Vec3, instantiate, AudioSource, CameraComponent, Vec2, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, playerfire;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController0", "./tank0", _context.meta, extras);
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
      Node = _cc.Node;
      RigidBody2D = _cc.RigidBody2D;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      AudioSource = _cc.AudioSource;
      CameraComponent = _cc.CameraComponent;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5192h+tvlL5K9Ow0eFjKYk", "playerfire", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'systemEvent', 'Input', 'input', 'EventMouse', 'SystemEvent', 'Node', 'EventKeyboard', 'macro', 'RigidBody2D', 'Vec3', 'instantiate', 'AudioSource', 'director', 'CameraComponent', 'Camera']);

      __checkObsolete__(['Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("playerfire", playerfire = (_dec = ccclass('playerfire'), _dec2 = property(AudioSource), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec(_class = (_class2 = (_class3 = class playerfire extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "shootAudio", _descriptor, this);

          _initializerDefineProperty(this, "shootPower", _descriptor2, this);

          //�ӵ��ķ����ٶ�
          _initializerDefineProperty(this, "bulletPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "landminePrefab", _descriptor4, this);

          _initializerDefineProperty(this, "Carmera", _descriptor5, this);

          this.direction = new Vec2(0, 0);
          this.currentiondirection = new Vec2(0, 0);
          this.lastdirection = new Vec2(0, -400);
          this.speed = new Vec2(0, 0);
          this.lastFireTime = 0;
          // �ϴη���ʱ��
          this.fireInterval = 0;
          // ������ʱ�䣬��λ��
          this.landminelastFireTime = 0;
          // �ϴη���ʱ��
          this.landminefireInterval = 2;
          // ������ʱ�䣬��λ��
          this.fireposition = new Vec2(0, 0);
          this.playercontroller0 = null;
        }

        start() {
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown0, this);
        }

        update() {}

        onDestroy() {
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown0, this);
        }

        onMouseMove(event) {
          this.fireposition = event.getLocation();
        }

        onMouseDown(event) {
          if (event.getButton() === 0) {
            const now = Date.now();

            if (now - this.lastFireTime > this.fireInterval * 1000) {
              this.fireBullet();
              this.lastFireTime = now; //this.fireposition=event.getLocation();
            }
          }
        }

        fireBullet() {
          const bullet = instantiate(this.bulletPrefab); //音效模块

          if (this.shootAudio && this.shootAudio.clip) {
            // ������Ч
            this.shootAudio.playOneShot(this.shootAudio.clip, 1);
          } else {
            console.error('��ƵԴ�������Ƶ����δ����');
          } //音效模块


          bullet.setParent(this.node);
          bullet.setPosition(this.node.position); //鼠标的屏幕坐标获取

          let worldPosition = this.node.getWorldPosition();
          let Camera0 = this.Carmera.getComponent(CameraComponent);
          let screenPosition = new Vec3();
          Camera0.worldToScreen(worldPosition, screenPosition);
          const rgd = bullet.getComponent(RigidBody2D);
          this.speed = new Vec2(this.fireposition.x - screenPosition.x, this.fireposition.y - screenPosition.y);
          this.speed.normalize();
          this.speed.x = this.speed.x * 100;
          this.speed.y = this.speed.y * 100;

          if (this.speed.x !== 0 || this.speed.y !== 0) {
            this.lastdirection = this.speed;
          }

          if (this.speed.x === 0 && this.speed.y === 0) {
            this.speed = this.lastdirection.clone();
          }

          rgd.linearVelocity = this.speed;
        } //���k�Ƿ���  �������


        onKeyDown0(event) {
          if (event.keyCode === 70) {
            const now = Date.now();

            if (now - this.landminelastFireTime > this.landminefireInterval * 1000) {
              this.putlandmine();
              this.landminelastFireTime = now;
            }
          }
        }

        putlandmine() {
          const bullet = instantiate(this.landminePrefab);
          bullet.setParent(this.node);
          bullet.setPosition(this.node.position); //�����ӵ�ʵ���ľ�������
        }

      }, _class3.fireInterval = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shootAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shootPower", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 500;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "landminePrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Carmera", [_dec5], {
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
//# sourceMappingURL=f35666bd6a8722196c11b551fc4efab271183c17.js.map
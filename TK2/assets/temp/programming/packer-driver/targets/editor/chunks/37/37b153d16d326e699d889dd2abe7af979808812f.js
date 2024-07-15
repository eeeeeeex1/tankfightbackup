System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, AudioSource, PlayerController1, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Bullet;

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
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      PlayerController1 = _unresolved_2.PlayerController1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82eb8uL1E5A6qEHok/xv6Ww", "bullet0", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Collider2D', 'Contact2DType', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bullet", Bullet = (_dec = ccclass('Bullet0'), _dec2 = property(AudioSource), _dec(_class = (_class2 = class Bullet extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "explosionAudio", _descriptor, this);
        }

        onLoad() {
          // 调用定时销毁方法
          this.scheduleDestroy();
        }

        scheduleDestroy() {
          // 使用 scheduleOnce 方法，在 5 秒后销毁节点
          this.scheduleOnce(() => {
            this.node.destroy(); // 检查音频源组件和音频剪辑是否已定义

            if (this.explosionAudio && this.explosionAudio.clip) {
              // 播放音效
              this.explosionAudio.playOneShot(this.explosionAudio.clip, 1);
            } else {
              console.error('音频源组件或音频剪辑未定义');
            }
          }, 3);
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider) {
          // 确保只处理一次销毁操作
          this.scheduleOnce(() => {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy(); // 检查音频源组件和音频剪辑是否已定义

            if (this.explosionAudio && this.explosionAudio.clip) {
              // 播放音效
              this.explosionAudio.playOneShot(this.explosionAudio.clip, 1);
            } else {
              console.error('音频源组件或音频剪辑未定义');
            }

            console.log(otherCollider.node.name);

            if (otherCollider && otherCollider.node.name !== 'normalwall' && otherCollider.node.name !== 'tank1') {
              otherCollider.node.destroy();
            } else if (otherCollider && otherCollider.node.name === 'tank1') {
              let playerController1 = otherCollider.node.getComponent(_crd && PlayerController1 === void 0 ? (_reportPossibleCrUseOfPlayerController({
                error: Error()
              }), PlayerController1) : PlayerController1);

              if (playerController1) {
                playerController1.tanklife = playerController1.tanklife - 1;
                console.log(playerController1.tanklife);
                if (playerController1.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            }
          }, 0.0001); // 稍微增加延迟，确保事件处理完毕
        }

        onDestroy() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "explosionAudio", [_dec2], {
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
//# sourceMappingURL=37b153d16d326e699d889dd2abe7af979808812f.js.map
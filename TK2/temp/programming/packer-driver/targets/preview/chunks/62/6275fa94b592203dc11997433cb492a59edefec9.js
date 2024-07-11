System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, systemEvent, SystemEventType, macro, input, Input, PlayerController0, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TankCheatController;

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
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      macro = _cc.macro;
      input = _cc.input;
      Input = _cc.Input;
    }, function (_unresolved_2) {
      PlayerController0 = _unresolved_2.PlayerController0;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e53736ZfF1Pro4MXnI//Ffo", "cheat-test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'systemEvent', 'SystemEventType', 'EventKeyboard', 'macro', 'input', 'Input']);

      // 确保正确引入 PlayerController0 类
      ({
        ccclass,
        property
      } = _decorator);

      _export("TankCheatController", TankCheatController = (_dec = ccclass('TankCheatController'), _dec2 = property(Node), _dec(_class = (_class2 = class TankCheatController extends Component {
        constructor() {
          super(...arguments);

          // 引用你的坦克节点或坦克组件，这里假设为 tankNode
          _initializerDefineProperty(this, "tankNode", _descriptor, this);

          // 秘籍输入
          this.cheatCode = "";
        }

        onLoad() {
          // 监听键盘事件
          input.on(Input.KEY_DOWN, this.onKeyDown, this);
        }

        onDestroy() {
          // 移除键盘事件监听
          systemEvent.off(SystemEventType.KEY_DOWN, this.onKeyDown, this);
        }

        onKeyDown(event) {
          // 获取按下的键名
          var key = event.keyCode; // 检查是否是字母键

          if (key >= macro.KEY.a && key <= macro.KEY.z || key >= macro.KEY.A && key <= macro.KEY.Z) {
            var keyName = String.fromCharCode(key);
            this.cheatCode += keyName.toLowerCase(); // 检查是否匹配秘籍代码

            if (this.cheatCode === "zhaoyibo") {
              // 找到 PlayerController0 组件并进行操作
              var playercontroller0 = this.tankNode.getComponent(_crd && PlayerController0 === void 0 ? (_reportPossibleCrUseOfPlayerController({
                error: Error()
              }), PlayerController0) : PlayerController0);

              if (playercontroller0) {
                playercontroller0.magnification = 20;
              } // 清空秘籍输入，以便下一次使用


              this.cheatCode = "";
            }
          } else {
            // 如果按下的不是字母键，则清空秘籍输入
            this.cheatCode = "";
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tankNode", [_dec2], {
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
//# sourceMappingURL=6275fa94b592203dc11997433cb492a59edefec9.js.map
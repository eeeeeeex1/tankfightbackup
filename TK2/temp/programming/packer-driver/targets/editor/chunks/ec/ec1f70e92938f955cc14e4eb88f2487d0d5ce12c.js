System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, director, AudioSource, PassInf, user, _dec, _dec2, _class2, _class3, _descriptor, _crd, ccclass, property, time11;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPassInf(extras) {
    _reporterNs.report("PassInf", "./PassInf", _context.meta, extras);
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
      find = _cc.find;
      director = _cc.director;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      PassInf = _unresolved_2.PassInf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "078c8q3fptLNpGt8/64KvxN", "time11", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'director', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);
      user = class user {
        constructor() {
          this.Account = void 0;
          this.Password = void 0;
          this.save = void 0;
          this.difficulty = void 0;
          this.d1time1 = 0;
          this.d1time2 = 0;
          this.d1time3 = 0;
          this.d1time = 0;
          this.d2time1 = 0;
          this.d2time2 = 0;
          this.d2time3 = 0;
          this.d2time = 0;
        }

      };

      _export("time11", time11 = (_dec = ccclass('time11'), _dec2 = property(AudioSource), _dec(_class2 = (_class3 = class time11 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "clickAudio", _descriptor, this);

          this.startTime = void 0;
          this.endTime = void 0;
        }

        start() {
          this.startTime = Date.now();
        }

        update(deltaTime) {
          if (!this.clickAudio.playing) {
            this.clickAudio.play();
          }

          if (!find("Canvas/background/tank/enemytank") && find("Canvas/background/tank/playertank")) {
            this.endTime = Date.now();
            let time = this.endTime - this.startTime;
            let Account = director.getScene().getChildByName('PassNode').getComponent(_crd && PassInf === void 0 ? (_reportPossibleCrUseOfPassInf({
              error: Error()
            }), PassInf) : PassInf).CurrentUser.Account;
            let RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));
            let i;

            for (i = 0; i < RegSet.length; i++) {
              if (RegSet[i].Account == Account) break;
            }

            RegSet[i].d2time3 = time / 1000;
            if (RegSet[i].d2time == 0) RegSet[i].d2time = Number((RegSet[i].d2time1 + RegSet[i].d2time2 + RegSet[i].d2time3).toFixed(2));else {
              if (RegSet[i].d2time > RegSet[i].d2time1 + RegSet[i].d2time2 + RegSet[i].d2time3) RegSet[i].d2time = Number((RegSet[i].d2time1 + RegSet[i].d2time2 + RegSet[i].d2time3).toFixed(2));
            }
            RegSet[i].save = 0;
            let json = JSON.stringify(RegSet);
            localStorage.setItem('RegSet', json);
            director.loadScene('victory');
          }

          if (!find("Canvas/background/tank/playertank")) director.loadScene('return');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "clickAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec1f70e92938f955cc14e4eb88f2487d0d5ce12c.js.map
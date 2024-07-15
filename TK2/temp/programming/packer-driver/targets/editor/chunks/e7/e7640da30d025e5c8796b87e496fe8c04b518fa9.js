System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, director, PassInf, user, _dec, _class2, _crd, ccclass, property, time01;

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
    }, function (_unresolved_2) {
      PassInf = _unresolved_2.PassInf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6430b4D/PNCNrntr446tiTO", "time01", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'director']);

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

      _export("time01", time01 = (_dec = ccclass('time01'), _dec(_class2 = class time01 extends Component {
        constructor(...args) {
          super(...args);
          this.startTime = void 0;
          this.endTime = void 0;
        }

        start() {
          this.startTime = Date.now(); //记录开始时间
        }

        update(deltaTime) {
          if (!find("Canvas/background/tank/enemytank") && find("Canvas/background/tank/playertank")) //检测是否击杀所有敌人并存活
            {
              this.endTime = Date.now();
              let time = this.endTime - this.startTime; //计算通关时间

              let Account = director.getScene().getChildByName('PassNode').getComponent(_crd && PassInf === void 0 ? (_reportPossibleCrUseOfPassInf({
                error: Error()
              }), PassInf) : PassInf).CurrentUser.Account; //获取当前用户

              let RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));
              let i;

              for (i = 0; i < RegSet.length; i++) {
                if (RegSet[i].Account == Account) break;
              }

              RegSet[i].d1time1 = time / 1000;
              RegSet[i].save = 1; //存储通关记录

              let json = JSON.stringify(RegSet);
              localStorage.setItem('RegSet', json);
              this.scheduleOnce(() => {
                director.loadScene('alonemap1');
              }, 3);
            }

          if (!find("Canvas/background/tank/playertank")) //若玩家被击杀则返回
            director.loadScene('return');
        }

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7640da30d025e5c8796b87e496fe8c04b518fa9.js.map
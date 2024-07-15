System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, user, _dec, _class2, _crd, ccclass, property, HLB;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3b84B0xwdNbZ6uDcFYlW/E", "HLB", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

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

      _export("HLB", HLB = (_dec = ccclass('HLB'), _dec(_class2 = class HLB extends Component {
        constructor() {
          super(...arguments);
          this.RegSet = void 0;
        }

        start() {
          this.RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));
          this.RegSet = this.RegSet.sort((n1, n2) => {
            return n1.d2time - n2.d2time;
          });

          for (var i = 0; i < this.RegSet.length; i++) {
            if (this.RegSet[i].d2time != 0) this.getComponent(Label).string += this.RegSet[i].Account + '          ' + this.RegSet[i].d2time + '\n';
          }
        }

        update(deltaTime) {}

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f58c1a06ddd46cfb838c27625d05a5fd8c95236.js.map
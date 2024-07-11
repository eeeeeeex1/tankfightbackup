System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, user, _dec, _class2, _crd, ccclass, property, PassInf;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fe4egUZHJGoqk8QUF2F1mm", "PassInf", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

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

      _export("PassInf", PassInf = (_dec = ccclass('PassInf'), _dec(_class2 = class PassInf extends Component {
        constructor() {
          super(...arguments);
          this.CurrentUser = void 0;
        }

        start() {
          director.addPersistRootNode(this.node); //设置常驻节点存放用户信息
        }

        update(deltaTime) {
          if (this.CurrentUser != null) {
            var RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));

            for (var item of RegSet) {
              if (item.Account == this.CurrentUser.Account) {
                this.CurrentUser = item;
              }
            }
          }
        }

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3260500038c15552d43f59d6b509c95e1febf8a0.js.map
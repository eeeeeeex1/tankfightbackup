System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, _dec, _class, _crd, ccclass, property, Account;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f24d9JmyGBPKYb1RjwqhVzG", "Account", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Account", Account = (_dec = ccclass('Account'), _dec(_class = class Account extends Component {
        start() {}

        update(deltaTime) {}

        getAccout() {
          let Accout = this.getComponent(EditBox).string; //获取输入的账号
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41373f08ab63f60ccea222ecba558ddb8a21bac3.js.map
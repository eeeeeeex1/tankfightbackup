System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, user, _crd;

  function testAccount(Account) {
    if (Account == 'wuxu') return 'Success';
  }

  _export("testAccount", testAccount);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e2e4hu2ZRGSopEJcceWaFY", "testAccount", undefined);

      user = class user {
        constructor() {
          this.Account = void 0;
          this.Password = void 0;
          this.save = void 0;
          this.difficulty = void 0;
          this.d1time1 = void 0;
          this.d1time2 = void 0;
          this.d1time3 = void 0;
          this.d1time = void 0;
          this.d2time1 = void 0;
          this.d2time2 = void 0;
          this.d2time3 = void 0;
          this.d2time = void 0;
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf964b32c144a4af96f6c2d319363c7fc0e4a38a.js.map
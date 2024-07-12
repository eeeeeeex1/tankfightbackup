System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SystemEvent, systemEvent, macro, director, _dec, _class, _crd, ccclass, property, esc;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SystemEvent = _cc.SystemEvent;
      systemEvent = _cc.systemEvent;
      macro = _cc.macro;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37eb1oEYxdHv7tC6j1CFTmw", "esc", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SystemEvent', 'systemEvent', 'macro', 'director', 'EventKeyboard']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("esc", esc = (_dec = ccclass('esc'), _dec(_class = class esc extends Component {
        start() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          director.preloadScene('return');
        }

        update(deltaTime) {}

        onKeyDown(event) {
          if (event.keyCode == macro.KEY.escape) {
            console.log('esc');
            director.loadScene('return');
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=01b2b3ca7b2de28e1aa16272590025714091bbdc.js.map
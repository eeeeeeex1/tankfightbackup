System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, firedirection0, _dec, _class, _crd, ccclass, property, fireaffect0;

  function _reportPossibleCrUseOffiredirection(extras) {
    _reporterNs.report("firedirection0", "./firedirection0", _context.meta, extras);
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
    }, function (_unresolved_2) {
      firedirection0 = _unresolved_2.firedirection0;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ebc0qfWtBG4qSuLlvlFYnp", "fireaffect0", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab']);

      // ȷ����ȷ���� firedirection0 ��
      ({
        ccclass,
        property
      } = _decorator);

      _export("fireaffect0", fireaffect0 = (_dec = ccclass('fireaffect0'), _dec(_class = class fireaffect0 extends Component {
        constructor(...args) {
          super(...args);
          this.playercontroller0 = null;
          this.originalMagnification = 0;
          // ��ʼ�� fireInterval ֵ
          this.changedMagnification = 0;
          // �仯��� fireInterval ֵ
          this.isChanging = false;
          // �Ƿ����ڱ仯
          this.changeDuration = 5;
          // �仯����ʱ�䣬��λ����
          this.changeTimer = 0;
        }

        // �仯��ʱ��
        start() {
          let node0 = this.node.parent.getChildByName('firedirection'); // ��ȡ PlayerController0 �� firedirection0 ��ʵ��

          this.playercontroller0 = node0.getComponent(_crd && firedirection0 === void 0 ? (_reportPossibleCrUseOffiredirection({
            error: Error()
          }), firedirection0) : firedirection0); // ��ʼ��¼��ǰ�� magnification ֵ

          if (this.playercontroller0) {
            this.originalMagnification = this.playercontroller0.fireInterval;
            this.changedMagnification = this.originalMagnification; // ��ʼʱ���仯���ֵ����ԭʼֵ
          }
        }

        update(deltaTime) {
          if (this.playercontroller0) {
            let currentMagnification = this.playercontroller0.fireInterval; // ��鵱ǰֵ�Ƿ���仯���ֵ��ͬ���Ҳ����ڱ仯״̬

            if (currentMagnification !== this.changedMagnification && !this.isChanging) {
              // magnification �����˱仯����ʼ��ʱ
              this.isChanging = true;
              this.changeTimer = 0;
              this.changedMagnification = currentMagnification; // ���±仯���ֵΪ��ǰֵ
            } // ������ڱ仯״̬����ʱ���ۼ�


            if (this.isChanging) {
              this.changeTimer += deltaTime; // �����ʱ�ﵽ�趨ʱ��

              if (this.changeTimer >= this.changeDuration) {
                // �� magnification �ظ���ԭʼֵ
                this.playercontroller0.fireInterval = this.originalMagnification;
                this.isChanging = false; // �仯����
              }
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c738b4a9b147d5326231324f6aa0f916d54c0594.js.map
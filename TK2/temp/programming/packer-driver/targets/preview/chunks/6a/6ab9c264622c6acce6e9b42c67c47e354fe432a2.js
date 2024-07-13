System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PlayerController0, _dec, _class, _crd, ccclass, property, speedaffect0;

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
    }, function (_unresolved_2) {
      PlayerController0 = _unresolved_2.PlayerController0;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4a99AMk+RN1Kp1f4UlhU0q", "speedaffect0", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab']);

      // ȷ����ȷ���� PlayerController0 ��
      ({
        ccclass,
        property
      } = _decorator);

      _export("speedaffect0", speedaffect0 = (_dec = ccclass('speedaffect0'), _dec(_class = class speedaffect0 extends Component {
        constructor() {
          super(...arguments);
          this.playercontroller0 = null;
          this.originalMagnification = 0;
          // ��ʼ�� magnification ֵ
          this.changedMagnification = 0;
          // �仯��� magnification ֵ
          this.isChanging = false;
          // �Ƿ����ڱ仯
          this.changeDuration = 5;
          // �仯����ʱ�䣬��λ����
          this.changeTimer = 0;
        }

        // �仯��ʱ��
        start() {
          // ��ȡ PlayerController0 �� firedirection0 ��ʵ��
          this.playercontroller0 = this.node.parent.getComponent(_crd && PlayerController0 === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController0) : PlayerController0); // ��ʼ��¼��ǰ�� magnification ֵ

          if (this.playercontroller0) {
            this.originalMagnification = this.playercontroller0.speed;
            this.changedMagnification = this.originalMagnification; // ��ʼʱ���仯���ֵ����ԭʼֵ
          }
        }

        update(deltaTime) {
          if (this.playercontroller0) {
            var currentMagnification = this.playercontroller0.speed; // ��鵱ǰֵ�Ƿ���仯���ֵ��ͬ���Ҳ����ڱ仯״̬

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
                this.playercontroller0.speed = this.originalMagnification;
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
//# sourceMappingURL=6ab9c264622c6acce6e9b42c67c47e354fe432a2.js.map
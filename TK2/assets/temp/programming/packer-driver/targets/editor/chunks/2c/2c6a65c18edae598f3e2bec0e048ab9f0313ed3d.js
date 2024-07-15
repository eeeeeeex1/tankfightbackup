System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Graphics, Color, _dec, _class, _crd, ccclass, property, background;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b50dczuoj9L06/49nBn0Nab", "background", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Graphics', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("background", background = (_dec = ccclass('background'), _dec(_class = class background extends Component {
        start() {
          // 获取当前组件所在的节点上的 Graphics 组件
          const ctx = this.node.getComponent(Graphics); // 创建一个 cc.Color 对象，并设置为蓝色

          const blueColor = new Color().fromHEX('#F5ECEB'); // 设置 Graphics 组件的填充颜色

          ctx.fillColor = blueColor; // 绘制一个矩形

          ctx.rect(-2560, -1440, 5120, 2880); // 从左下角 (-50, -50) 开始，绘制宽高为 100x100 的矩形

          ctx.fill(); // 填充矩形
        }

        update(deltaTime) {// 这里可以添加每帧更新的逻辑
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c6a65c18edae598f3e2bec0e048ab9f0313ed3d.js.map
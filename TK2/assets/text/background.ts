import { _decorator, Component, Node, Graphics, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('background')
export class background extends Component {
    start() {
        // 获取当前组件所在的节点上的 Graphics 组件
        const ctx = this.node.getComponent(Graphics);
        // 创建一个 cc.Color 对象，并设置为蓝色
        const blueColor = new Color().fromHEX('#F5ECEB');
        // 设置 Graphics 组件的填充颜色
        ctx.fillColor = blueColor;
        // 绘制一个矩形
        ctx.rect(-2560, -1440, 5120, 2880); // 从左下角 (-50, -50) 开始，绘制宽高为 100x100 的矩形
        ctx.fill(); // 填充矩形
    }

    update(deltaTime: number) {
        // 这里可以添加每帧更新的逻辑
    }
}

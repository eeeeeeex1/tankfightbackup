import { _decorator, Component, Node, Graphics, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('wall0')
export class background extends Component {
    start() {
        // 获取当前组件所在的节点上的 Graphics 组件
        const ctx = this.node.getComponent(Graphics);
        // 创建一个 cc.Color 对象，并设置为黑色
        const Color0 = new Color().fromHEX('#0A0909');
        // 设置 Graphics 组件的填充颜色
        ctx.fillColor = Color0;
        // 绘制一个矩形
        ctx.rect(-1000, -350, 400, 50); // 从左下角 (0, 0) 开始，绘制宽高为 100x100 的矩形
        ctx.fill(); // 填充矩形
    }

    update(deltaTime: number) {
        // 这里可以添加每帧更新的逻辑
    }
}

import { _decorator, Component, Node, Button, director } from 'cc';
import { log } from './log';
const { ccclass, property } = _decorator;

@ccclass('SceneSwitcher')
export class SceneSwitcher extends Component {


    start() {
        // 绑定按钮点击事件
        this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
    }

    loadSinglePlayerScene() {
        director.loadScene('single'); // 使用你的单人闯关场景名称
    }
}
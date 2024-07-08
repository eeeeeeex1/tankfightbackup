import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('returnlog')
export class returnlog extends Component {
    start() {
         // 绑定按钮点击事件
       this.node.on(Button.EventType.CLICK, this.loadLogScene, this);
    }
   
    loadLogScene() {
        director.loadScene('LoginScene'); // 使用你的单人闯关场景名称
    }

    update(deltaTime: number) {
        
    }
}



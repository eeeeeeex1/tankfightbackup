import { _decorator, Button, Component, game, Game, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('endgame')
export class endgame extends Component {
    start() {
         // 绑定按钮点击事件
       this.node.on(Button.EventType.CLICK, this.end, this);
    }
   
    end() {
        game.end();
    }

    update(deltaTime: number) {
        
    }
}



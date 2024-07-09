import { _decorator, Component, Node } from 'cc';
import { PlayerController0 } from './tank0'; // 确保正确引入 PlayerController0 类
import { PlayerController1 } from './tank1'; // 确保正确引入 PlayerController0 类
const { ccclass, property } = _decorator;

@ccclass('tankdestroy')
export class tankdestroy extends Component {

    update(deltaTime: number) {
        const playercontroller0: PlayerController0 = this.node.parent.getComponent(PlayerController0);
        const playercontroller1: PlayerController1 = this.node.parent.getComponent(PlayerController1);

        if(playercontroller0.tanklife===0||playercontroller1.tanklife===0){
            this.endsence();


        }

        playercontroller0.node.getPosition;
    }
    private endsence(){
        console.log('游戏结束');
    }

}



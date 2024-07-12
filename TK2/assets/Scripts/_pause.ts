import { _decorator, Component, director, Node } from 'cc';
import { pause } from './pause';
const { ccclass, property } = _decorator;

@ccclass('_pause')
export class _pause extends Component {
    start() {
        director.pause();//预制体调用时暂停背景
    }

    update(deltaTime: number) {
        
    }
}



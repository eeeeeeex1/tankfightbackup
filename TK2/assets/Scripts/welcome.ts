import { _decorator, Component, director, instantiate, Node, Prefab, Sprite } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('welcome')
export class welcome extends Component {
    @property(Prefab)
    LoadingPrefab: Prefab;

    onLoad (){
        let Load=instantiate(this.LoadingPrefab);//动态挂载进度条
        this.node.addChild(Load);
    }
    start() {

    }

    update(deltaTime: number) {
    }

}



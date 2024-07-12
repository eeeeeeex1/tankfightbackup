import { _decorator, Component, Node,input, EventKeyboard,Input,macro,Prefab, instantiate,BlockInputEvents, Mask, director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('pause')
export class pause extends Component {
    @property(Prefab)
    pausePrefab: Prefab;

    status:number =0;
    start() {
        input.on(Input.EventType.KEY_DOWN,this._pause,this);
    }
    _pause(Event:EventKeyboard)
    {
        if(Event.keyCode==macro.KEY.space)
        {
            if(this.status==0)
            {
                let stop=instantiate(this.pausePrefab);
                this.node.addChild(stop);
                this.status=1;
            }//调用并挂载暂停预制体，并记录暂停状态
            else
            {
                this.status=0;
                director.resume();
                this.node.getChildByName('_pause').destroy();
            }//恢复
        }
    }
    update(deltaTime: number) {
        
    }
}



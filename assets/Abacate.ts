// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Abacate extends cc.Component {
  @property(cc.Label)
  public label: cc.Label = null;

  @property
  public prtext = 'hello';

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  // public start(): void { }

  // update (dt) {}
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Abacate from './Abacate';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Batata extends Abacate {
  @property(cc.Label)
  public label: cc.Label = null;

  @property
  public text = 'hello';

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  // start() { }

  // update (dt) {}
}

const { ccclass } = cc._decorator;
/**
 * @class
 * @template S an enum of string with the states
 * @template T the main actor class used
 */
@ccclass
export default abstract class StateMachine<S, T extends { state: S }> extends cc.Component {
  protected actor: T;

  public abstract onAnimationStart(state: S): void;

  public abstract onAnimationEnd(state: S): void;
}

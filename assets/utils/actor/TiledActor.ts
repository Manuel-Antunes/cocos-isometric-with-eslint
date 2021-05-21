import DIRECTION from '../DIRECTION';
import IsometricTiledMap from '../IsometricTiledMap';

const { ccclass, property } = cc._decorator;

@ccclass
export default class TiledActor extends cc.Component {
  @property(IsometricTiledMap)
  protected tiledMap: IsometricTiledMap = null;

  public forwardVector: cc.Vec2 = DIRECTION.DOWN;

  public move(direction: cc.Vec2): void {
    const position = this.node.getPosition().add(direction);
    if (direction === this.forwardVector) {
      if (this.isRectCollidingWithGroup(this.getAFuturePoint(direction), this.tiledMap.walkableTiles)) {
        if (!this.isRectCollidingWithGroup(this.getAFuturePoint(direction), this.tiledMap.obstacles)) {
          this.node.setPosition(position);
        }
      }
    }
  }

  protected getAFuturePoint(point: cc.Vec2): cc.Rect {
    const newRetangle = cc.rect(
      point.x + 2 - this.node.width / 2,
      point.y + 2 - this.node.height / 2,
      this.node.width - 4,
      this.node.height - 4
    );
    return newRetangle;
  }

  protected isRectCollidingWithGroup(rect: cc.Rect, group: Array<cc.Rect>): boolean {
    for (let i = 0; i < group.length; i += 1) {
      if (rect.intersects(group[i])) {
        return true;
      }
    }
    return false;
  }

  public getTileCoordinates(): cc.Vec2 {
    const x = Math.ceil(this.node.x / this.tiledMap.getTileSize().width);
    const y = Math.ceil(this.node.y / this.tiledMap.getTileSize().height);
    return cc.v2(x, y);
  }
}

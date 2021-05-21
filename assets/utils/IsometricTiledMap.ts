const { ccclass, property } = cc._decorator;

@ccclass
export default class IsometricTiledMap extends cc.TiledMap {
  @property({ type: [cc.TiledLayer] })
  public walkableLayers: Array<cc.TiledLayer> = [];

  @property({ type: [cc.TiledLayer] })
  public collidableLayers: Array<cc.TiledLayer> = [];

  public start(): void {
    super.start();
    this.initMap();
  }

  public obstacles: Array<cc.Rect> = [];

  public walkableTiles: Array<cc.Rect> = [];

  private initMap(): void {
    this.collidableLayers.forEach(c => {
      this.addLayerRectsToGroup(this.obstacles, c);
    });
    this.walkableLayers.forEach(w => {
      this.addLayerRectsToGroup(this.obstacles, w);
    });
  }

  public getRandNavigablePoint(): cc.Rect {
    return this.walkableTiles[Math.ceil(Math.random() * this.walkableTiles.length)];
  }

  private addLayerRectsToGroup(group: Array<cc.Rect>, layer: cc.TiledLayer) {
    for (let i = 0; i < this.getMapSize().width; i += 1) {
      for (let j = 0; j < this.getMapSize().height; j += 1) {
        const tile = layer.getTileGIDAt(new cc.Vec2(i, j));
        if (tile) {
          group.push(
            cc.rect(
              i * this.getTileSize().width,
              this.getMapSize().height * this.getTileSize().height - (j + 1) * this.getMapSize().height,
              this.getTileSize().width,
              this.getTileSize().height
            )
          );
        }
      }
    }
  }
}

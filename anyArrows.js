function anyArrows(arrows){
    return arrows.some(arrow => !arrow.hasOwnProperty('damaged') || arrow.damaged === false);
  }
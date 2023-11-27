function getSize(width, height, depth) {
    let area = (2 * depth * width) + (2 * depth * height) + (2 * width * height);
    let volume = width * height * depth;
    return [area, volume];
  }
  
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class myCanvas extends Canvas {
  constructor(...args) {
    super(...args);
    this.array = [];
    this.n = 999;
    this.cellsize = myCanvas.width / this.n;
    easyLoop(this.n, (i) => {
      this.array.push(
        new Square(this.cellsize, Random.randomFloat(myCanvas.height), Colors.randomColor(), {
          x: i * this.cellsize,
          y: 0,
        })
      );
    });
  }

  drawCallback() {
    myCanvas.clear();
    this.array.forEach((e, i) => {
      e.pos = {
        x: i * this.cellsize,
        y: 0,
      };
      e.fill();
    });
  }

  async bubbleSort() {
    for (let i = this.array.length; i != 0; i--) {
      let didSwap = false;
      for (let j = 0; j < i - 1; j++) {
        if (this.array[j].height > this.array[j + 1].height) {
          swap(this.array, j, j + 1);
          didSwap = true;
          this.drawCallback();
          await sleep(1);
        }
      }
      if (!didSwap) break;
    }
  }
}

function swap(arr, id1, id2) {
  [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
}

window.onload = () => {
  const canvas = new myCanvas(document.querySelector("canvas"), 1, false, 1);
  canvas.bubbleSort();
};

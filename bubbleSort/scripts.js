const [canvas, ctx] = start(
  document.querySelector("canvas"),
  window.innerWidth,
  window.innerHeight,
  { antialias: false }
);
const array = [];
const n = 99;
const size = canvas.width / n;
loop(n, () => {
  array.push(random(0, canvas.height));
})();

function draw() {
  clear(ctx, canvas);
  array.forEach((e, i) => {
    rect(
      ctx,
      i * size,
      0,
      size,
      e,
      map_color(e, 0, canvas.height, 100, 255),
      "stroke"
    );
  });
}

async function bubbleSort(array) {
  for (let i = array.length; i != 0; i--) {
    let didSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        didSwap = true;
        swap(array, j, j + 1);
      }
      draw();
      await sleep(10);

    }
    if (!didSwap) break;
  }
  return array;
}

bubbleSort(array);

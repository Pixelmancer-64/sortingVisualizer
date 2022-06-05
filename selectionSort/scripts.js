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

async function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    swap(arr, i, lowest);
    draw()

    await sleep(10)
  }
  return arr;
}

selectionSort(array);

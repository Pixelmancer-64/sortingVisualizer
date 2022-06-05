function rect(ctx, x, y, width, height, color = "white", mode = "fill") {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  mode === "stroke" ? (ctx.strokeStyle = color) : (ctx.fillStyle = color);
  mode === "stroke" ? ctx.stroke() : ctx.fill();
}

function arc(ctx, x, y, radius, start, end, color = "white", mode = "fill") {
  ctx.beginPath();
  ctx.arc(x, y, radius, start, end);
  mode === "stroke" ? (ctx.strokeStyle = color) : (ctx.fillStyle = color);
  mode === "stroke" ? ctx.stroke() : ctx.fill();
}

// TODO clear with transform
function clear(ctx, canvas) {
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );
  ctx.restore();
}

function random(start, end) {
  return Math.random() * (end - start) + start;
}

function map(n, start, stop, start2, stop2) {
  return ((n - start) / (stop - start)) * (stop2 - start2) + start2;
}

function loop(i, callback) {
  function wraper(...args) {
    for (let j = 0; j < i; j++) {
      callback(...args);
    }
  }
  return wraper;
}

function random_color(alpha=1, offset=0) {
  return `rgba(${random(offset, 255)}, ${random(offset, 255)}, ${random(
    offset,
    255
  )}, ${alpha})`;
}

function map_color(val, s, e, s1, e1){
  const mapped = map(val, s, e, s1, e1)
  return `rgba(${mapped}, ${mapped}, ${mapped}, ${1})`
}

function swap(arr, id1, id2) {
  [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function start(canvas, width, height, options = {}){
  canvas.width = width;
  canvas.height = height
  return [canvas, canvas.getContext("2d", options)]
}
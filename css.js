console.log(
  "i%{background: linear-gradient(to left,rgb(255-(255/51),255,255),rgb(100,12,12),rgb(30+(255/51),144,255))}"
);
for (i = 0; i <= 51; i++) {
  const x = 243 / 51;
  if (i <= 51) {
    console.log(`${i}% ${12 + x * i}`);
  }
  //   console.log(`${i}%{background: linear-gradient(
  //     to left,
  //     rgb(${30 + x * i}, 255, 255),
  //     rgb(100, 12, 12),
  //     rgb(${255 - x * i}, 144, 255)
  //   );}`);
}

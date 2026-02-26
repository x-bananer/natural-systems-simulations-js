// with ps5.js

function setup() {
  createCanvas(800, 500);
  
  // The size of the noise features. Smaller values means larger, smoother shapes.
  const noiseScale = 0.01;
  
  // The brightness range of the clouds. Not 0..255 range to avoid very dark clouds.
  const cloudBrightnessMin = 150;
  const cloudBrightnessMax = 255;

  loadPixels();

  // Loop over every pixel on the canvas
  
  for (let y = 0; y < height; y++) { // height and width of the canvas are ps5.js variables
    for (let x = 0; x < width; x++) {

      // Get a smooth pseudo-random value from Perlin noise. The result is always in [0, 1].
      const noiseValue = noise(x * noiseScale, y * noiseScale); // 0..1

      // Map the noise from [0, 1] to a brightness range. Turns the noise field into a cloud.
      const cloudBrightness = map(
        noiseValue,
        0,
        1,
        cloudBrightnessMin,
        cloudBrightnessMax
      );
      
      // Compute the index of the current pixel in the pixels[] array.
      const pixelIndex = 4 * (x + y * width);
      
      // Set RGB channels to the same value to get grayscale.
      pixels[pixelIndex + 0] = cloudBrightness; // R
      pixels[pixelIndex + 1] = cloudBrightness; // G
      pixels[pixelIndex + 2] = cloudBrightness; // B
      
      // Set alpha channel to fully opaque.
      pixels[pixelIndex + 3] = 255;             // A
    }
  }

  updatePixels();
}

function draw() {}

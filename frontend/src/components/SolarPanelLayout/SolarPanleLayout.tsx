// Libraries imports
import React, { useEffect, useRef } from 'react';

// Interfaces declaration
interface SolarPanelLayoutProps {
    coordinatesInPixel: PanelCoordinates[];
    image: string;
}

interface PanelCoordinates {
  0: PanelCoordinate;
  1: PanelCoordinate;
  2: PanelCoordinate;
  3: PanelCoordinate;
}

interface PanelCoordinate {
  0: number;
  1: number;
}


const SolarPanelLayout: React.FC<SolarPanelLayoutProps> = ({ coordinatesInPixel, image }) => {
  // UseRef to access the canvas element in the DOM after rendering
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
      // Assign the canvas and its 2D context to variables
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      
      // If canvas context is available
      if (ctx && canvas) {
          // Creates a new Image instance
          const roofImage = new Image();
          roofImage.onload = () => {
              // Adjust canvas size to match roof image size
              canvas.width = roofImage.width;
              canvas.height = roofImage.height;
              // Draw the image of the roof on the canvas
              ctx.drawImage(roofImage, 0, 0);

              // Scroll through each set of solar panel coordinates
              coordinatesInPixel.forEach(coordinates => {

                  const [x1, y1] = [coordinates[0][0], coordinates[0][1]];
                  const [x2, y2] = [coordinates[1][0], coordinates[1][1]];
                  const [x3, y3] = [coordinates[2][0], coordinates[2][1]];
                  const [x4, y4] = [coordinates[3][0], coordinates[3][1]];

                  // Start a new drawing path for the solar panel
                  ctx.beginPath();

                  // Move starting point to first corner
                  ctx.moveTo(x1, y1);

                  // Draw lines between the corners of the solar panel
                  ctx.lineTo(x2, y2);
                  ctx.lineTo(x3, y3);
                  ctx.lineTo(x4, y4);

                  // Close the path to complete the outline of the solar panel
                  ctx.closePath();

                  // Fill the solar panel with a semi-transparent color
                  ctx.fillStyle = 'rgba(220, 20, 60, 0.5)';
                  ctx.fill();
              });
          };

          // Set image source as base64 encoded data
          roofImage.src = `data:image/png;base64,${image}`;
      }
  }, [coordinatesInPixel, image]);

  // Rendering the canvas in the DOM
  return <canvas ref={canvasRef} />;
};

export default SolarPanelLayout;
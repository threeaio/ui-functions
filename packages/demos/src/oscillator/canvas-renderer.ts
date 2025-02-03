/**
 * Handles canvas rendering for the oscillator visualization
 */
export class CanvasRenderer {
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private history: number[] = [];
  private readonly historyLength = 200;

  /**
   * Creates a new canvas renderer
   * @param canvas - The canvas element to render to
   */
  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')!;
    this.width = canvas.width;
    this.height = canvas.height;
    this.setupCanvas();
  }

  /**
   * Sets up the canvas with the correct size and scale
   */
  private setupCanvas(): void {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.ctx.canvas.getBoundingClientRect();
    
    this.ctx.canvas.width = rect.width * dpr;
    this.ctx.canvas.height = rect.height * dpr;
    
    this.ctx.scale(dpr, dpr);
    this.width = rect.width;
    this.height = rect.height;
  }

  /**
   * Draws the background grid
   */
  private drawGrid(): void {
    this.ctx.strokeStyle = '#2A2A2A';
    this.ctx.lineWidth = 1;

    // Draw horizontal lines
    for (let y = 0; y <= this.height; y += 40) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.width, y);
      this.ctx.stroke();
    }

    // Draw vertical lines
    for (let x = 0; x <= this.width; x += 40) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.height);
      this.ctx.stroke();
    }
  }

  /**
   * Updates the visualization with a new value
   * @param value - The current oscillator value (-1 to 1)
   */
  public update(value: number): void {
    this.history.push(value);
    if (this.history.length > this.historyLength) {
      this.history.shift();
    }

    this.clear();
    // this.drawGrid();
    this.drawWave();
    this.drawPoint(value);
  }

  /**
   * Clears the canvas
   */
  private clear(): void {
    this.ctx.fillStyle = '#0A0A0A';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  /**
   * Draws the historical wave data
   */
  private drawWave(): void {
    this.ctx.strokeStyle = 'rgb(41, 221, 140)';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();

    this.history.forEach((value, index) => {
      const x = (index / this.historyLength) * this.width;
      const y = ((value + 1) / 2) * this.height;

      if (index === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    });

    this.ctx.stroke();
  }

  /**
   * Draws the current value point
   * @param value - The current oscillator value (-1 to 1)
   */
  private drawPoint(value: number): void {
    const x = this.width - 10;
    const y = ((value + 1) / 2) * this.height;

    this.ctx.fillStyle = 'rgb(41, 221, 140)';
    this.ctx.beginPath();
    this.ctx.arc(x, y, 6, 0, Math.PI * 2);
    this.ctx.fill();
  }
} 
import { oscillator, type OscillatorConfig } from '@threeaio/oscillator';
import { waveformFactory } from '@threeaio/utils/animation';
import { clamp } from '@threeaio/utils/math';

/**
 * Demonstrates the oscillator functionality with a sine wave
 * @param outputElement - The HTML element to display the output
 */
function runOscillatorDemo(outputElement: HTMLElement) {
    const sineWave = waveformFactory('sine');
    const config: OscillatorConfig = {
        currentTimeMs: 0,
        bpm: 60,
        waveformfun: sineWave
    };

    // Update every 16ms (approximately 60fps)
    setInterval(() => {
        config.currentTimeMs += 16;
        const value = oscillator(config);
        
        // Map the oscillator value (-1 to 1) to a percentage (0 to 100)
        const percentage = ((value + 1) / 2) * 100;
        
        // Update the progress bar width
        outputElement.style.width = `${percentage}%`;
    }, 16);
}

/**
 * Demonstrates the utils functionality with the clamp function
 * @param outputElement - The HTML element to display the output
 */
function runUtilsDemo(outputElement: HTMLElement) {
    let value = 0;
    const increment = 5;

    setInterval(() => {
        // Increment value and clamp between 0 and 100
        value = clamp(0, 100, value + increment);
        
        // Reset when we reach 100
        if (value === 100) {
            value = 0;
        }

        // Update the progress bar width
        outputElement.style.width = `${value}%`;
    }, 100);
}

// Initialize demos when window loads
window.addEventListener('load', () => {
    const oscillatorOutput = document.getElementById('oscillator-output');
    const utilsOutput = document.getElementById('utils-output');

    if (oscillatorOutput) {
        runOscillatorDemo(oscillatorOutput);
    }

    if (utilsOutput) {
        runUtilsDemo(utilsOutput);
    }
}); 
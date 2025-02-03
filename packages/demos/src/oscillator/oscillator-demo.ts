import { oscillator, type OscillatorConfig } from '@threeaio/oscillator';
import { waveformFactory, type WaveformType, type WaveformParams } from '@threeaio/utils/animation';
import { CanvasRenderer } from './canvas-renderer';

/**
 * Configuration state for all waveform parameters
 */
interface WaveformState {
    type: WaveformType;
    params: Partial<WaveformParams[WaveformType]>;
}

/**
 * Initializes and runs the oscillator demo
 */
function initOscillatorDemo() {
    const canvas = document.getElementById('oscillator-canvas') as HTMLCanvasElement;
    const bpmInput = document.getElementById('bpm-input') as HTMLInputElement;
    const bpmValue = document.getElementById('bpm-value') as HTMLSpanElement;
    const phaseInput = document.getElementById('phase-input') as HTMLInputElement;
    const phaseValue = document.getElementById('phase-value') as HTMLSpanElement;
    const waveformSelect = document.getElementById('waveform-select') as HTMLSelectElement;
    const waveformParams = document.getElementById('waveform-params') as HTMLDivElement;

    if (!canvas || !bpmInput || !waveformSelect || !phaseInput || !waveformParams) {
        console.error('Required elements not found');
        return;
    }

    // Initialize waveform state
    const waveformState: WaveformState = {
        type: 'sine',
        params: {}
    };

    const renderer = new CanvasRenderer(canvas);
    let config: OscillatorConfig = {
        currentTimeMs: 0,
        bpm: parseInt(bpmInput.value),
        waveformfun: waveformFactory(waveformState.type),
        phaseShift: parseFloat(phaseInput.value)
    };

    /**
     * Updates the waveform function based on current state
     */
    function updateWaveform() {
        config.waveformfun = waveformFactory(
            waveformState.type,
            waveformState.params as any
        );
    }

    /**
     * Shows/hides parameter groups based on waveform type
     */
    function updateParamVisibility() {
        // Hide all param groups
        const groups = waveformParams.querySelectorAll('[data-param-group]');
        groups.forEach(group => group.classList.add('hidden'));

        // Show current waveform's params if any
        const currentGroup = waveformParams.querySelector(
            `[data-param-group="${waveformState.type}"]`
        );
        if (currentGroup) {
            currentGroup.classList.remove('hidden');
        }
    }

    // Update handlers
    bpmInput.addEventListener('input', () => {
        const value = parseInt(bpmInput.value);
        config.bpm = value;
        bpmValue.textContent = value.toString();
    });

    phaseInput.addEventListener('input', () => {
        const value = parseFloat(phaseInput.value);
        config.phaseShift = value;
        phaseValue.textContent = value.toFixed(2);
    });

    waveformSelect.addEventListener('change', () => {
        waveformState.type = waveformSelect.value as WaveformType;
        waveformState.params = {};
        updateWaveform();
        updateParamVisibility();
    });

    // Setup parameter change handlers
    waveformParams.querySelectorAll('input[data-param]').forEach(input => {
        const paramInput = input as HTMLInputElement;
        const param = paramInput.dataset.param!;
        const valueDisplay = paramInput.parentElement?.querySelector('.value');

        paramInput.addEventListener('input', () => {
            const value = parseFloat(paramInput.value);
            waveformState.params = {
                ...waveformState.params,
                [param]: value
            };
            if (valueDisplay) {
                valueDisplay.textContent = value.toString();
            }
            updateWaveform();
        });
    });

    // Animation loop
    let lastTime = 0;
    function animate(timestamp: number) {
        const deltaTime = lastTime ? timestamp - lastTime : 0;
        lastTime = timestamp;

        config.currentTimeMs += deltaTime;
        const value = oscillator(config);
        const referenceValue = oscillator({
            ...config,
            waveformfun: waveformFactory('sawtooth')
        });
        renderer.update(value, referenceValue);

        requestAnimationFrame(animate);
    }

    // Initialize UI
    updateParamVisibility();
    requestAnimationFrame(animate);
}

// Initialize when the window loads
window.addEventListener('load', initOscillatorDemo); 
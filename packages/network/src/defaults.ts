import { NetworkNode } from './NetworkNode'
import { NetworkNodeTooltip } from './NetworkNodeTooltip'
import { NetworkLayerId } from './types'

const commonDefaultProps = {
    layers: ['links', 'nodes'] as NetworkLayerId[],

    linkDistance: 30,
    repulsivity: 10,
    distanceMin: 1,
    distanceMax: Infinity,
    iterations: 90,

    nodeColor: '#000000',
    nodeBorderWidth: 0,
    nodeBorderColor: { from: 'color' },

    linkThickness: 1,
    linkColor: { from: 'source.color' },

    isInteractive: true,
    nodeTooltip: NetworkNodeTooltip,

    animate: true,
    motionConfig: 'gentle' as const,

    role: 'img',
}

export const NetworkDefaultProps = {
    ...commonDefaultProps,
}

export const svgDefaultProps = {
    ...NetworkDefaultProps,
    nodeComponent: NetworkNode,
}

export const NetworkCanvasDefaultProps = {
    ...commonDefaultProps,
    pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
}

export const canvasDefaultProps = NetworkCanvasDefaultProps
import { svgDefaultProps } from '@nivo/waffle-grid'
import {
    themeProperty,
    motionProperties,
    groupProperties,
    motionConfigProperty,
} from '../../../lib/componentProperties'
import { ChartProperty } from '../../../types'

const props: ChartProperty[] = [
    /*
    {
        key: 'data',
        group: 'Base',
        type: 'object[]',
        required: true,
        help: 'Chart data.',
        description: `
            Here is what the data for a single chart with 2 bars would look like:
            
            \`\`\`
            [
                {
                    id: 'Fruits',
                    data: [{ x: 'Apples', y: 32 }]
                },
                {
                    id: 'Vegetables',
                    data: [{ x: 'Eggplants', y: 27 }]
                }
            ]
            \`\`\`
            
            You can add several metrics per group:
            
            \`\`\`
            [
                {
                    id: 'Fruits',
                    data: [
                        { x: 'Apples', y: 32 },
                        { x: 'Mangoes', y: 15 }
                    ]
                },
                {
                    id: 'Vegetables',
                    data: [
                        { x: 'Eggplants', y: 27 },
                        { x: 'Avocados', y: 34 }
                    ]
                }
            ]
            \`\`\`
            
            When a bar is computed, the \`id\` is going to be added
            as the \`groupId\`, \`x\` as the \`category\` and \`y\`
            as the value, for example the first bar for the number of Apples
            in the Fruits group would be:
            
            \`\`\`
            {
                groupId: 'Fruits',
                category: 'Apples',
                value: 32
            }
            \`\`\`
            
            You might read those values when adding an \`onClick\` handler
            for example, or when customizing the tooltip.
        `,
        flavors: ['svg'],
    },
    {
        key: 'maxValue',
        group: 'Base',
        type: `'auto' | number`,
        required: false,
        help: `If 'auto', the max value is derived from the data, otherwise use a static value.`,
        flavors: ['svg'],
        defaultValue: svgDefaultProps.maxValue,
    },
    {
        key: 'valueFormat',
        group: 'Base',
        type: 'string | (value: number) => string',
        required: false,
        help: 'Optional formatter for values (`y`).',
        description: `
            The formatted value can then be used for labels & tooltips.

            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),
            please have a look at it for available formats, you can also pass a function
            which will receive the raw value and should return the formatted one.
        `,
        flavors: ['svg'],
        controlType: 'valueFormat',
    },
    */
    {
        key: 'width',
        group: 'Base',
        type: 'number',
        required: true,
        help: 'Chart width.',
        description: `
            not required if using
            \`<ResponsiveRadialBar/>\`.
        `,
        flavors: ['svg', 'api'],
        enableControlForFlavors: ['api'],
        controlType: 'range',
        controlOptions: {
            unit: 'px',
            min: 100,
            max: 1000,
            step: 5,
        },
    },
    {
        key: 'height',
        group: 'Base',
        type: 'number',
        required: true,
        help: 'Chart height.',
        description: `
            not required if using
            \`<ResponsiveRadialBar/>\`.
        `,
        flavors: ['svg', 'api'],
        enableControlForFlavors: ['api'],
        controlType: 'range',
        controlOptions: {
            unit: 'px',
            min: 100,
            max: 1000,
            step: 5,
        },
    },
    {
        key: 'margin',
        group: 'Base',
        help: 'Chart margin.',
        type: 'object',
        required: false,
        flavors: ['svg'],
        controlType: 'margin',
    },
    {
        key: 'cellValue',
        group: 'Base',
        type: 'number',
        required: true,
        help: 'Define the value each cell represents.',
        flavors: ['svg'],
        controlType: 'range',
        controlOptions: {
            min: 500,
            max: 2000,
            step: 100,
            unit: 'px',
        },
    },
    {
        key: 'spacing',
        group: 'Base',
        type: 'number',
        required: false,
        help: 'Spacing between each waffle.',
        flavors: ['svg'],
        defaultValue: svgDefaultProps.spacing,
        controlType: 'range',
        controlOptions: {
            min: 0,
            max: 36,
            unit: 'px',
        },
    },
    themeProperty(['svg']),
    /*
    {
        key: 'colors',
        group: 'Style',
        type: 'string | Function | string[]',
        required: false,
        help: 'Defines how to compute colors.',
        flavors: ['svg'],
        defaultValue: svgDefaultProps.colors,
        controlType: 'ordinalColors',
    },
    {
        key: 'borderWidth',
        group: 'Style',
        type: 'number',
        required: false,
        help: 'Bars border width.',
        flavors: ['svg'],
        defaultValue: svgDefaultProps.borderWidth,
        controlType: 'lineWidth',
    },
    {
        key: 'borderColor',
        group: 'Style',
        type: 'InheritedColorConfig<ComputedBar>',
        required: false,
        help: 'Method to compute border color.',
        description: `
            how to compute border color,
            [see dedicated documentation](self:/guides/colors).
        `,
        flavors: ['svg'],
        defaultValue: svgDefaultProps.borderColor,
        controlType: 'inheritedColor',
    },
    {
        key: 'enableRadialGrid',
        group: 'Grid & Axes',
        type: 'boolean',
        required: false,
        help: 'Enable radial grid (rays)',
        flavors: ['svg'],
        defaultValue: svgDefaultProps.enableRadialGrid,
        controlType: 'switch',
    },
    {
        key: 'enableCircularGrid',
        group: 'Grid & Axes',
        type: 'boolean',
        required: false,
        help: 'Enable circular grid (rings)',
        flavors: ['svg'],
        defaultValue: svgDefaultProps.enableCircularGrid,
        controlType: 'switch',
    },
    */
    {
        key: 'isInteractive',
        group: 'Interactivity',
        type: 'boolean',
        required: false,
        help: 'Enable/disable interactivity.',
        flavors: ['svg'],
        defaultValue: svgDefaultProps.isInteractive,
        controlType: 'switch',
    },
    /*
    {
        key: 'tooltip',
        group: 'Interactivity',
        type: 'RadialBarTooltipComponent',
        required: false,
        help: 'Override default tooltip.',
        flavors: ['svg'],
    },
    {
        key: 'onClick',
        group: 'Interactivity',
        type: '(bar: ComputedBar, event: MouseEvent) => void',
        required: false,
        help: 'onClick handler.',
        flavors: ['svg'],
    },
    {
        key: 'onMouseEnter',
        group: 'Interactivity',
        type: '(bar: ComputedBar, event: MouseEvent) => void',
        required: false,
        help: 'onMouseEnter handler.',
        flavors: ['svg'],
    },
    {
        key: 'onMouseMove',
        group: 'Interactivity',
        type: '(bar: ComputedBar, event: MouseEvent) => void',
        required: false,
        help: 'onMouseMove handler.',
        flavors: ['svg'],
    },
    {
        key: 'onMouseLeave',
        group: 'Interactivity',
        type: '(bar: ComputedBar, event: MouseEvent) => void',
        required: false,
        help: 'onMouseLeave handler.',
        flavors: ['svg'],
    },
    {
        key: 'legends',
        group: 'Legends',
        type: 'LegendProps[]',
        required: false,
        help: `Optional chart's legends.`,
        flavors: ['svg'],
        controlType: 'array',
        controlOptions: {
            props: getLegendsProps(['svg']),
            shouldCreate: true,
            addLabel: 'add legend',
            shouldRemove: true,
            getItemTitle: (index, legend) =>
                `legend[${index}]: ${legend.anchor}, ${legend.direction}`,
            svgDefaultProps: {
                dataFrom: 'keys',
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: 0,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 0,
                symbolSize: 20,
                itemDirection: 'left-to-right',
                onClick: data => {
                    alert(JSON.stringify(data, null, '    '))
                },
            },
        },
    },
    */
    {
        key: 'role',
        group: 'Accessibility',
        type: 'string',
        required: false,
        help: 'Main element role attribute.',
        flavors: ['svg'],
    },
    {
        key: 'ariaLabel',
        group: 'Accessibility',
        type: 'string',
        required: false,
        help: 'Main element [aria-label](https://www.w3.org/TR/wai-aria/#aria-label).',
        flavors: ['svg'],
    },
    {
        key: 'ariaLabelledBy',
        group: 'Accessibility',
        type: 'string',
        required: false,
        help: 'Main element [aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby).',
        flavors: ['svg'],
    },
    {
        key: 'ariaDescribedBy',
        group: 'Accessibility',
        type: 'string',
        required: false,
        help: 'Main element [aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby).',
        flavors: ['svg'],
    },
    ...motionProperties(['svg'], svgDefaultProps, 'react-spring'),
    motionConfigProperty(
        'blankCellsMotionConfig',
        ['svg'],
        undefined,
        'Optional motion config override for blank cells.'
    ),
    motionConfigProperty(
        'valueCellsMotionConfig',
        ['svg'],
        undefined,
        'Optional motion config override for value cells.'
    ),
]

export const groups = groupProperties(props)

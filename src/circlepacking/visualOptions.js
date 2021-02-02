export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 20,
    group: 'artboard',
  },

  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 20,
    group: 'artboard',
  },

  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 20,
    group: 'artboard',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 20,
    group: 'artboard',
  },

  showLegend: {
    type: 'boolean',
    label: 'Show legend',
    default: false,
    group: 'artboard',
  },

  legendWidth: {
    type: 'number',
    label: 'Legend width',
    default: 200,
    group: 'artboard',
    disabled: {
      showLegend: false,
    },
    container: 'width',
    containerCondition: {
      showLegend: true,
    },
  },

  padding: {
    type: 'number',
    label: 'Circles padding',
    default: 2,
    group: 'chart',
  },

  sortCirclesBy: {
    type: 'text',
    label: 'Sort circles by',
    group: 'chart',
    options: [
      { label: 'Size (descending)', value: 'descending' },
      { label: 'Size (ascending)', value: 'ascending' },
      { label: 'Original', value: 'original' },
    ],
    default: 'descending',
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  },

  showLabelsOutline: {
    type: 'boolean',
    label: 'Show outline',
    default: false,
    group: 'labels',
  },

  showHierarchyLabels: {
    type: 'boolean',
    label: 'Show hierarchy labels',
    default: false,
    group: 'labels',
  },

  autoHideLabels: {
    type: 'boolean',
    label: 'Auto hide labels',
    default: false,
    group: 'labels',
  },

  // labelStyle: {
  //   type: 'text',
  //   label: 'Label style',
  //   group: 'labels',
  //   options: ['Primary', 'Secondary', 'Tertiary'],
  //   default: 'Primary',
  // },
}

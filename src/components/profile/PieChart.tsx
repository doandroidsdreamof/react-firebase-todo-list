import React from 'react'

import { Pie } from '@ant-design/plots'

const PieChart = () => {
  const data = [
    {
      type: 'Completed Todos',
      value: 27,
    },
    {
      type: 'Uncompleted Todos',
      value: 25,
    },
  ]
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    animation: {
      appear: {
        animation: 'wave-in',
        duration: 1000,
      },
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  }
  return <Pie {...config} />
}

export default PieChart

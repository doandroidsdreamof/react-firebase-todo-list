import React,{FC} from 'react'

import { Pie } from '@ant-design/plots'
import { ChartData } from '../../types/Todos'

const PieChart:FC <ChartData> = (props) => {
  const data = [
    {
      type: 'Completed Todos',
      value: props.completed,
    },
    {
      type: 'Uncompleted Todos',
      value: props.unCompleted,
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

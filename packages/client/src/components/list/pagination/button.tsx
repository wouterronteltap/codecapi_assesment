import React from 'react'
import { IconButton } from '@material-ui/core'

interface IProps {
  onClick: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
  index: number
  active: boolean
}

const PaginationButton = ({ onClick, index, active }: IProps) => {
  const color = active ? 'secondary' : 'primary'
  return (
    <IconButton size={'small'} color={color} onClick={onClick}>
      {index}
    </IconButton>
  )
}

export { PaginationButton }

import React from 'react'
import { parse, ParsedUrlQuery } from 'querystring'

import { PaginationButton } from './button'
import { useAppDispatch } from '../../../context'
import { IDispatch, ILinks } from '../../../types'

interface IProps {
  currentPage: number
  links?: ILinks
}

const createPaginationArray = (
  currentPage: number,
  lastPage: number,
  { dispatch }: IDispatch
) => {
  let buttons = []
  for (let i = 1; i <= lastPage; i++) {
    buttons.push(
      <PaginationButton
        onClick={() =>
          dispatch({
            type: 'SET_PAGE',
            payload: i,
          })
        }
        key={i}
        index={i}
        active={i === currentPage}
      />
    )
  }
  return buttons
}

const PaginationContainer = React.memo((props: IProps) => {
  const { links, currentPage } = props
  if (!links) {
    return null
  }
  const lastPage = getLastPage(links, currentPage)
  const dispatch = useAppDispatch()
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {createPaginationArray(currentPage, lastPage, dispatch)}
    </div>
  )
})

export { PaginationContainer }

const getLastPage = (links: ILinks, currentPage: number) => {
  if (!links.last) {
    return currentPage
  }
  const parsedLink: ParsedUrlQuery = parse(links.last)
  const page = parsedLink.page
  return parseInt(page as string)
}

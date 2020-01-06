import React, { useEffect } from 'react'

import { useAppState } from '../../context'
import { UserDetails } from '../../components/details/details'
import { useApi } from '../../hooks/useApi'

import { CONSTANTS } from '../../utils/contants'
import { Typography } from '@material-ui/core'

interface IProps {
  login: string
}

const DetailsContainer = (props: IProps) => {
  const { login } = props
  const { data, isError, isLoading, error } = useAppState()
  const url = CONSTANTS.GET_USER_DETAILS_URL(login)
  const [setUrl] = useApi(url)
  useEffect(() => {
    setUrl(url)
  }, [login])
  return (
    <>
      {data && !isLoading && !isError && <UserDetails data={data} />}
      {isLoading && <Typography variant={'body1'}>loading ...</Typography>}
      {isError && <Typography variant={'body1'}>{error}</Typography>}
    </>
  )
}

export { DetailsContainer }

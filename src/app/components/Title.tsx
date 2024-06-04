import React from 'react'

type TitleProps = {
    label: string;
}

const Title = ({label}: TitleProps)  => {
  return (
    <h1 className='text-2xl font-semibold tracking-wider'>{label}</h1>
  )
}

export default Title
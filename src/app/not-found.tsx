import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (<>
    <h1>Ops! Page not found</h1>
    <Link href={'/'}>Return</Link>
  </>
  )
}

export default NotFound
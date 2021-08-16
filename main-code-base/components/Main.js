import * as React from 'react'
import VueWrapper from './VueWrapper'
import VueWrapperAdvanced from './VueWrapperAdvanced'

export default function Main() {

  return (
    <div>
      <VueWrapper componentProps={ { msg:'props from react world' }}/>
      <VueWrapperAdvanced name='MyVueComponentAdvanced' componentProps={ { msg:'props from react world' }}/>
    </div>
  )
}

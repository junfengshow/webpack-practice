import React, { useEffect } from 'react'
import styleBase from './style.base.md'
import marked from 'marked'
const wid: any = window
const styleBaseHtml = marked(styleBase)
export default () => {
  useEffect(() => {
    wid.Prism.highlightAll() 
  }, [true])
  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: styleBaseHtml}} />
    </div>
  )
}

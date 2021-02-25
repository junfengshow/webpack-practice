import React, { useEffect } from 'react'
import marked from 'marked'
import md from './LeetCode.md'
import request from '../../utils/request'

const html = marked(md)
const wid: any = window

export default () => {
  useEffect(() => {
    wid.Prism.highlightAll() 
    // request('/wages/poets/poems.json', {
    //   body: { poetId: 1 }
    // }).then((res) => {
    //   console.log(res)
    // })
  }, [true])  
  return (
    <div 
      dangerouslySetInnerHTML={{__html: html}}
    />
  )
}

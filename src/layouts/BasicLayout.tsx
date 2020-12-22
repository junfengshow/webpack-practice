import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './BasicLayout.scss'

export default ({ children }: { children: any }) => (
  <div>
    <div className={styles['nav-wrap']}>
      <ul className={styles['nav-inner']}>
        <li><NavLink to='/leetcode' activeClassName={styles['active']}>链接一</NavLink></li>
        <li><NavLink to='/style' activeClassName={styles['active']}>链接二</NavLink></li>
        <li><NavLink to='/style1' activeClassName={styles['active']}>链接三</NavLink></li>
      </ul>
    </div>
    {children}
  </div>
)

import React from 'react';
import './User.css';
import _ from 'lodash';

const User = () => {
  const name = _.get({ name: 'zhangsan' }, 'name')
  return (
    <div className='user-name'>
      user: {name}
    </div>
  )
}
export default User 

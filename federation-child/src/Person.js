import React from 'react';
import './User.css';
import _ from 'lodash';

const Person = () => {
  const name = _.get({ name: 'Person' }, 'name')
  return (
    <div style={{background: 'yellow'}}>
      Person: {name} kdkkdeldldld
    </div>
  )
}
export default Person 

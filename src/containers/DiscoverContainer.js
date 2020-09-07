import React from 'react'
import DiscoverFilters from '../components/DiscoverFilters'
import DiscoverDisplay from '../components/DiscoverDisplay'

function DiscoverContainer () {

  return (
    <div className='discovery-container'>
      <DiscoverFilters />
      <DiscoverDisplay />
    </div>
  )

}

export default DiscoverContainer
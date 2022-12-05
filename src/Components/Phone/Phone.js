import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Phone() {
     const loaderdata = useLoaderData();
     const {name} = loaderdata;
    
  return (
    <div>
     <p>{name}</p>
    </div>
  )
}

export default Phone
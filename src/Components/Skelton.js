import React from 'react'

function Skelton({times}) {
    return Array(times).fill(0).map((_,i)=><div key={i}/>)
  
}

export default Skelton
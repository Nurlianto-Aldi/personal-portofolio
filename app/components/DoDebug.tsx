"use client"

import { projectList } from "../database/Project"


const DoDebug = () => {
  
  const theData = projectList

  const justClick = () => {
    console.log(theData[0].content)
  }
  
  return (
    <div>
      <h1
        onClick={justClick}
      >Click This</h1>
    </div>
  )
}

export default DoDebug;
import React from 'react'

const Header = ({props,children}) => {
  
    // console.log(props.headerInfo.email); 
  return (
    <div>Header
      {/* <h1>Welcome Props {props.email} {props.phoneNumberinWords}</h1> */}
      
      {/* de-Structuring */}
      <h1>Welcome </h1>
      {children}
      

    </div>
  )
}

export default Header
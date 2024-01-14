import React from 'react'

const Footer = () => {
  let footer= {
    color: 'green',
    padding: '2px',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(9, 12, 12, 0.91)',
    fontSize: '20px',
  };
  return (
    <div class="d-flex justify-content-center" style={footer}>
      Copyright &copy; adarsha
    </div>
  )
}

export default Footer

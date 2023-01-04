import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWrighter = () => {
  return (
    <div className='App'>
      <h1 className='typeing-text' >
        I'm a{' '}
        <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Web Developer', 'Front-End Developer', 'React Developer', 'Programmer']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}
export default TypeWrighter
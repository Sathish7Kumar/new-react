// import React, { useState } from 'react'
// import './App.css'
// import Guest from './page/Guest'
// import WelcomeUser from './page/WelcomeUser'

// const App2 = () => {
//     const [isLoggin, setisLoggin] = useState(false)
//   return (
//     <div>
//        {
//        isLoggin ? 
//         <>
//         <WelcomeUser isLoggin={isLoggin} setisLoggin={setisLoggin} />
//         </>
//         : 
//         <>
//         <Guest isLoggin={isLoggin} setisLoggin={setisLoggin}/>
//         </>
//         } 
//     </div>
//   )
// }

// export default App2

import React from 'react'
import './App.css'
import Vote from './page/Vote'

const App2 = () => {
  return (
    <div>
        <Vote/>
    </div>
  )
}

export default App2
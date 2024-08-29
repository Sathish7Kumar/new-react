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

// import React from 'react'
// import './App.css'
// import Vote from './page/Vote'

// const App2 = () => {
//   return (
//     <div>
//         <Vote/>
//     </div>
//   )
// }

// export default App2


import React, { useState } from 'react'
import './App.css'
import Pageone from './page/Pageone'
import Pagetwo from './page/Pagetwo'

const App2 = () => {
  const [pageone, setpageone] = useState(true)
  const [pagetwo, setpagetwo] = useState(false)

  const handlePageOne = () =>{
    setpagetwo(false)
    setpageone(true)
  }

  const handlePageTwo = () =>{
    setpageone(false)
    setpagetwo(true)
  }

  return (
    <div>
        <button onClick={handlePageOne}>Page 1</button>
        <button onClick={handlePageTwo}>Page 2</button>
        <hr />
        {pageone && <> <Pageone/> </>}
        {pagetwo && <> <Pagetwo/> </>}
    </div>
  )
}

export default App2
import React, { createContext, useState } from 'react'
import CHome1 from './Context/CHome1'

export const DetailsContext = createContext()

const App5 = () => {
    // const [myname, setmyname] = useState("Dhoni")
    // const [age, setage] = useState(43)
    const [details, setdetails] = useState({
        myname:"Ms Dhoni",
        age:"43",
        data : [{},{}]
    })
    return (
        <DetailsContext.Provider value={[details.myname,details.age]}>
            <div>
                <CHome1 />
            </div>
        </DetailsContext.Provider>
    )
}

export default App5
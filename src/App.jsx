import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App



// import { createContext, useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './components/Header/Header'
// import { Outlet } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

// export const FeaturedJobContext = createContext([]);

// function App() {
//   const [featuredJobData, setFeaturedJobData] = useState([]);

//   useEffect(() => {
//     fetch('/jobDetails.json')
//     .then(res => res.json())
//     .then(data => setFeaturedJobData(data))
//   }, [])

//   return (
//     <div className="App">
//         <FeaturedJobContext.Provider value={featuredJobData}>
//               <Header></Header>
//               <Outlet></Outlet>
//         </FeaturedJobContext.Provider>
//     </div>
//   )
// }

// export default App
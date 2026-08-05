
//------------for vite project--------------------//
// function App() {
//   return ( 
//     <h1>Vite Project</h1>
//   );
// }

// export default App
//-------------------changes for custom project--------------------------//
import Chai from "./chai"
function App() {
  const username = "chai aur code"
  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
   </>
  )
}
export default App


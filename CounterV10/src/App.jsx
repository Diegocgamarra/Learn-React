import { useState } from 'react';

const App = () => {
  const [ number, setNumber ] = useState(0);

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={()=>setNumber( number + 1 )}>Incrementar</button>
    </div>
  )

}
export default App;
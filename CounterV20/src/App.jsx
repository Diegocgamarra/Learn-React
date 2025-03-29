import { useState } from "react";
import styles from './App.module.css'

const App = () => {
  const [number, setNumber] = useState(0);

  const handleWithDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  return (
    <div className={styles.main_div}>
      <div className={styles.square}>
        <div className={styles.paragraph}>
          <p>The current number is:</p>
        </div>

        <div className={styles.number_div}>
          <h3>{number}</h3>
        </div>

      </div>
      <div className={styles.buttons}>
        {number > 0 &&
      <button className={styles.mybutton_two} onClick={handleWithDecrement}>Decrement</button>}
        <button className={styles.mybutton_one} onClick={()=>setNumber(number + 1)}>Increment</button>
      </div>
    </div>
  )

}
export default App;
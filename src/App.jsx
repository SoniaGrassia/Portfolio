// import { useState } from "react";
import Navbar from "./components/navbar";
import Modal from "./components/modal";
import styles from "./App.module.scss";

function App() {
  // const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={styles.App}>
      <Navbar />
      <Modal />
      <h1>MY PORTFOLIO!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sunt
        deleniti doloremque magni, quos veniam. Aliquid placeat vero assumenda
        ipsum laudantium deserunt beatae debitis quidem. Sint vel cum odio
        numquam?
      </p>
    </div>
  );
}

export default App;

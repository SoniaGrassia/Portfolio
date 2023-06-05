import styles from "./index.module.scss";
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <CiMenuKebab className={styles.hamburger} />
    </div>
  );
};
export default Navbar;

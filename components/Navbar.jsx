import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../util/hooks";
import  Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import FocusLock from "react-focus-lock";


const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = "main-menu"
  const phone = "08101592754"

  useOnClickOutside(node, ()=> setOpen(false))


  return (
    
    <div className={styles.container} ref={node}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>

          <a href={`tel:${phone}`}>
            {" "}
            <div className={styles.text}>012 345 678</div>{" "}
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
      {/* INSERT MENU LINK AND ICON */}
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
import { FunctionComponent, useCallback } from "react";
import styles from "./Wishlist.module.css";

const Wishlist: FunctionComponent = () => {
  const onWishlistTextClick = useCallback(() => {
    // Please sync "Wish List" to the project
  }, []);

  return (
    <div className={styles.wishlist} onClick={onWishlistTextClick}>
      Wishlist
    </div>
  );
};

export default Wishlist;

import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🙈🙉🙊</span>
        <br />
        Nothing found
      </h1>

      <p className={styles.descr}>Unfortunately this page is missing</p>
    </div>
  );
};

export default NotFoundBlock;

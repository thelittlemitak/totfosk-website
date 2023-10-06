import styles from "../teaching.module.css";
import { useState } from "react";

function Btn(props) {
  const [btnStyle, setBtnStyle] = useState(styles.btnStyle);

  const styler = function (e) {
    let btnTag = e.target.innerHTML;
    setBtnStyle(styles.selectedBtn);
    props.instSelectorT(btnTag);
  };

  return (
    <button onClick={styler} className={btnStyle}>
      {props.nameTunnel}
    </button>
  );
}

export default Btn;
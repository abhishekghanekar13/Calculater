import styles from "./Display.module.css"
let Display=({oninput})=>{
  return (
    <>
      <div className={styles.inputBox}>
        <input className={styles.display} type="text" value={oninput}></input>
      </div>
    </>
  );
};
export default Display;

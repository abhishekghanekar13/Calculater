import styles from "./Box.module.css"
let Box=({diplay})=>{
  let button=["c","1","2","+","3","4","-","5","6","/","7","8",".","9","0","*","="]
  return(
    <>
      <div className={styles.buttonBox}>
       {
        button.map(button=><button className={styles.btn}
        onClick={ ()=> diplay(button)}>{button}</button>)
       }
        
      </div>
    </>
  );
}
export default Box;

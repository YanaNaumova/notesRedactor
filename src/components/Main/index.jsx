import styles from "./styles.module.css";
import NoteList from "../NoteList";

function Main() {
  return (
    <main className={styles.main}>
      <NoteList />
    </main>
  );
}

export default Main;

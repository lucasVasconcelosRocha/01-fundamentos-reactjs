import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Siderbar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1637999052989-4d7cf96bb805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxkZXZlbG9wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/lucasVasconcelosRocha.png"
        />

        <strong>Lucas Vasconcelos</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

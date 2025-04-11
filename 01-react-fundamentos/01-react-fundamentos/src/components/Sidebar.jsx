import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1740953794738-5cc7f8588d1e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/20102566?v=4" alt="profile image"/>
                <strong>Yoko Yashida</strong>
                <span> Developer </span>
            </div>
            <footer>
                <a href="https://github.com/">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
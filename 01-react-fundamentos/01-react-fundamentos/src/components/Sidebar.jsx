import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className={styles.profile}>
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
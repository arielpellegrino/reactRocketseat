import {Post} from './Post.jsx';
import './assets/global.css'
import styles from './App.module.css'
import {Header} from "./components/Header.jsx";
import {Sidebar} from "./components/Sidebar.jsx";

export function App() {
    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author="Ariel Pellegrino"
                        content="Ariel Pellegrino Content test"
                    />
                    <Post
                        author="Ariel Pellegrino"
                        content="Ariel Pellegrino Content test"
                    />
                </main>
            </div>
        </div>
    )
}


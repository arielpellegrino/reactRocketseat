import { Post } from './Post.jsx';
import './assets/global.css'
import styles from './App.module.css'
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

export function App() {
    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author="Ariel Pellegrino I."
                        content="Text POST 2"
                    />
                    <Post
                        author="Ariel Pellegrino"
                        content="Text POST 2"
                    />
                </main>
            </div>
        </div>
    )
}


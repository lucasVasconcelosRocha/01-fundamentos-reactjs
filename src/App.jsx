import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Siderbar } from "./components/Siderbar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          <Post
            author="Lucas Vasconcelos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos tempore ut quo deleniti, mollitia, aliquam labore, voluptatibus laboriosam quam facere libero animi eveniet dolorem est ad possimus accusantium ipsam."
          />
          <Post author="Lucas Rocha" content="conteúdo" />
        </main>
      </div>
    </div>
  );
}

export default App;

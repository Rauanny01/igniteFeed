import { Header } from './components/Header';
import { Post, PostType } from "./components/Post";
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/Rauanny01.png',
      name: 'Rauanny Santos',
      role: 'Estudante @ Rocketseat'
    },

    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋',},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      { type: 'paragraph', content: 'Acesse e deixe seu feedback'},
      {type: 'link', content: 'devonlane.design'}
    ],
    publishedAt: new Date('2024-03-12 16:00:00')

  },
  {
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/giovanafontes.png',
      name: 'Giovana Fontes',
      role: 'Colaboradora da Anula Multa'
    },

    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋',},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      { type: 'paragraph', content: 'Acesse e deixe seu feedback'},
      {type: 'link', content: 'devonlane.design'}
    ],
    publishedAt: new Date('2024-03-11 16:00:00')

  },
];

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            ) 
          })}
        </main>
      </div>
    </div>
  )
}


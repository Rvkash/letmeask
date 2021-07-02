import { useHistory } from 'react-router-dom';

import illustrationimg from '../assets/images/illustration.svg';
import logoimg from '../assets/images/logo.svg';
import IconImg from '../assets/images/googleicon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
      if(!user) {
        await signInWithGoogle
      }

      history.push('/rooms/new')
    }

    return (
        <div id="page-auth">
          <aside>
              <img src={illustrationimg} alt="ilustração perguntas e respostas" />
              <strong>Crie salas e Q&amp;A ao-vivo</strong>
              <p>Tire as dúvidas da sua audiência em tempo-real</p>
          </aside>
          <main>
              <div className="main-content">
                  <img src={logoimg} alt="letmeask" />
                  <button onClick={handleCreateRoom} className="create-room">
                      <img src={IconImg} alt="google icon" />
                      Crie sua sala com o Google
                  </button>
                  <div className="separator">
                      ou entre em uma sala
                  </div>
                  <form>
                      <input
                          type="text"
                          placeholder="Digite o código da sala"
                      />
                      <Button type="submit">
                          Entrar na sala
                      </Button>
                  </form>
              </div>
          </main>
      </div>
    )
}


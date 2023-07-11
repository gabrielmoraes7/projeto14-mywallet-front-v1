import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: ''});
  const [confirmPassword, setConfirmPassword] = useState('');
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    //confere se as senhas são iguais antes de executar o post do form
    if (formData.password !== confirmPassword) {
      alert('A senha e a confirmação da senha devem ser iguais');
      return;
    }

    const promise = api.signUp({
      ...formData
    });

    promise.then(() => {
      setIsLoading(false);
      navigate("/");
    });
    promise.catch(() => {
      setIsLoading(false);
      alert('Erro, tente novamente');
    });
  }

  return (
    <SingUpContainer>
      <form onSubmit={handleSubmit}>
        <MyWalletLogo />
        <input type="name"
          placeholder="Nome"
          name="name"
          onChange={handleChange}
          value={formData.name}/>

        <input type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}/>
        
        <input type="password"
          placeholder="senha"
          name="password"
          onChange={handleChange}
          value={formData.password}/>

        <input
          placeholder="Confirme a senha"
          type="password"
          autocomplete="new-password"
          onChange={e => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

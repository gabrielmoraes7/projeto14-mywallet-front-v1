import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const promise = api.login({ ...formData });
    promise.then((response) => {
      login(response.data);
      navigate("/today");
    });
    promise.catch(() => {
      alert('Erro, tente novamente');
    });
  }

  return (
    <SingInContainer>
      <form onSubmit={handleSubmit}>
        <MyWalletLogo />

        <input type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required 
          />

        <input type="password"
          placeholder="senha"
          name="password"
          onChange={handleChange}
          value={formData.password}
          autocomplete="new-password" 
          required
          />
        <button type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

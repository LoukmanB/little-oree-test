import "./Login.scss";
import { useState } from "react";

// Components import
import { CTAButton } from "../../components/CTAButton/CTAButton";
import { TextInput } from "../../components/TextInput/TextInput";
import { useLoginUser } from "../../services/useLoginUser";

export const Login = () => {
  // Hooks declaration
  const { requestLogin, isLoading, errorMessage } = useLoginUser();

  // Sates declaration
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Functions declaration
  const handleConnect = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await requestLogin({ email: username, password });
  };

  return (
    <div className="Login">
      <form className="Login__Form" onSubmit={handleConnect}>
        <div className="Login__Inputs">
          <TextInput
            placeholder="Email *"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
            placeholder="Mot de passe *"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="Login__ErrorMessage">
          <p>{errorMessage}</p>
        </div>
        <div className="Login__Button">
          <CTAButton name="Connexion" type="submit" isLoading={isLoading} />
        </div>
      </form>
    </div>
  );
};

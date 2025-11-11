# 🚀 loginFrontMongo

Projeto front‑end de autenticação

## 🧠 Sobre o Projeto

Este é o módulo front‑end de um sistema de login/autenticação que se comunica com um backend e utiliza MongoDB no backend.  
Principais funcionalidades:
- Tela de login (usuário + senha)  
- Possível página de registro ou recuperação de senha (dependendo da implementação)  
- Comunicação com API para autenticação do usuário  
- Interface construída em React para facilitar a integração e reutilização de componentes  
- Integração com backend que armazena dados de usuários no MongoDB

## 🛠 Tecnologias Utilizadas

- ⚛️ React  
- 🎨 (Por exemplo) CSS moderno ou biblioteca de estilos (TailwindCSS, Styled‑Components, etc) — verifique no seu projeto  
- 🔌 Axios ou Fetch API para chamadas HTTP (confirme qual foi usada)  
- 🔄 React Router DOM (se houver navegação entre páginas)  
- 🌐 MongoDB para persistência de dados no back‑end (nota: este módulo é front‑end, o back‑end deverá usar MongoDB)  
- 📦 (Opcional) Ferramentas de bundling / dev como Vite ou Create React App — verifique seu `package.json`

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/arthurstx/loginPgProject.git
```

### 2. Entrar na pasta do front‑end
```bash
cd loginPgProject/loginFrontMongo
```

### 3. Instalar as dependências
```bash
npm install
# ou
yarn install
```

### 4. Rodar o projeto em modo de desenvolvimento
```bash
npm run start
# ou (dependendo do script)
npm run dev
```

### 5. Acessar no navegador  
Abra [http://localhost:3000](http://localhost:3000) (ou outra porta informada) para visualizar a aplicação.

## 📜 Scripts Disponíveis

| Comando                  | Descrição                                       |
|--------------------------|-------------------------------------------------|
| `npm start`              | Inicia o aplicativo em modo de desenvolvimento  |
| `npm run build`          | Gera a versão de produção                       |
| `npm test`               | Executa testes (se configurado)                 |
| `npm run lint`           | Verifica estilo de código (se configurado)     |

> ⚠️ Verifique no seu `package.json` os scripts exatos — substitua conforme necessário.

## 📂 Estrutura de Pastas

```
loginFrontMongo/
 ├── public/             # Arquivos públicos (index.html, ícones, etc)
 ├── src/
 │    ├── assets/        # Imagens, ícones, etc
 │    ├── components/    # Componentes reutilizáveis
 │    ├── pages/         # Páginas principais (Login, Registro, etc)
 │    ├── services/      # Chamadas API, configuração de cliente HTTP
 │    ├── styles/        # Estilos globais ou temáticos
 │    ├── App.jsx        # Componente raiz
 │    └── index.jsx      # Ponto de entrada da aplicação
 ├── .env                # Variáveis de ambiente (endpoint da API etc)
 ├── package.json        # Dependências e scripts
 └── README.md           # Este arquivo
```

## 🔐 Configuração de Ambiente

Certifique‑se de configurar variáveis de ambiente como:
```
REACT_APP_API_URL=https://seu‑backend.com/api
```
ou conforme o nome utilizado no projeto.

## 🌐 Deploy

Você pode fazer o deploy deste front‑end em serviços como Netlify, Vercel ou em qualquer hospedagem estática.  
Após build (`npm run build`), suba o conteúdo da pasta `build/` ou `dist/` para o serviço de sua escolha.

## 🤝 Contribuição

Contribuições são bem‑vindas!  
1. Faça um fork do projeto  
2. Crie uma branch para sua feature (`git checkout ‑b minha-feature`)  
3. Commit suas alterações (`git commit ‑m 'Adiciona nova feature'`)  
4. Envie para o repositório remoto (`git push origin minha-feature`)  
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT — veja o arquivo `LICENSE` para detalhes.

## 💬 Contato

Desenvolvido por **Arthur Santos Teixeira**  
📧 arthurteixeirasantos@gmail.com
🐙 GitHub: [@arthurstx](https://github.com/arthurstx)

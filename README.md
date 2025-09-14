# 📱 Albums App

Aplicativo mobile em **React Native (Expo + Expo Router)** que consome
dados de uma API REST baseada no **JSONPlaceholder**, simulada via [My
JSON Server](https://my-json-server.typicode.com/).

O app possui 3 telas principais:

-   **Lista de Usuários** → carrega todos os usuários.
-   **Lista de Álbuns** → mostra os álbuns do usuário selecionado.
-   **Lista de Fotos** → exibe as fotos do álbum selecionado.

------------------------------------------------------------------------

## 🚀 Tecnologias

-   [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
-   [Expo Router](https://expo.github.io/router/docs/)
-   [My JSON Server](https://my-json-server.typicode.com/)
-   Componentes customizados (Card, Header, ErrorState, etc.)
-   Hooks (`useFetch` para consumo de API)

------------------------------------------------------------------------

## 🗂 Estrutura de Pastas

    app/
     ├─ _layout.tsx          # Layout principal (Stack Navigator)
     ├─ index.tsx            # Lista de usuários
     ├─ albums/[userId].js   # Lista de álbuns do usuário
     └─ photos/[albumId].js  # Lista de fotos do álbum
    components/              # Componentes reutilizáveis
    hooks/                   # Hook customizado (useFetch)
    api/                     # Configuração da API

------------------------------------------------------------------------

## ⚙️ Instalação e Execução

Clone este repositório e instale as dependências:

``` bash
git clone https://github.com/<SEU_USUARIO>/<SEU_REPO>.git
cd <SEU_REPO>
npm install
```

Inicie o projeto com Expo:

``` bash
npx expo start
```

-   Pressione **a** → abrir em emulador Android\
-   Pressione **i** → abrir em simulador iOS\
-   Escaneie o QR Code com o app **Expo Go** no celular

------------------------------------------------------------------------

## 🌐 API utilizada

Este projeto utiliza o [My JSON
Server](https://my-json-server.typicode.com/) para disponibilizar dados
sem precisar rodar servidor local.

Base URL da API:

    https://my-json-server.typicode.com/<SEU_USUARIO>/<SEU_REPO>

Exemplos de endpoints: - `/users` - `/albums?userId=1` -
`/photos?albumId=1`

------------------------------------------------------------------------

## 📄 Licença

Este projeto é apenas para fins acadêmicos/didáticos.\
Desenvolvido por **Felipe Almeida de Freitas** ✨

# Gerenciador de Tarefas Inteligente

## 1. Sobre o projeto

O Gerenciador de Tarefas Inteligente é um aplicativo desenvolvido como atividade acadêmica da disciplina de Desenvolvimento Mobile, utilizando Ionic, Angular e Capacitor.

O objetivo do projeto é facilitar a organização das atividades do dia a dia, permitindo que os usuários cadastrem, organizem e acompanhem suas tarefas de maneira simples e prática.

O aplicativo foi desenvolvido para funcionar em dispositivos móveis Android, com uma interface intuitiva e recursos de armazenamento local.

## 2. Funcionalidades

O aplicativo oferece as seguintes funcionalidades:

- **Cadastrar tarefas:** adicionar novas atividades.
- **Editar tarefas:** modificar informações de tarefas cadastradas.
- **Excluir tarefas:** remover atividades que não são mais necessárias.
- **Concluir tarefas:** marcar atividades como finalizadas ou reabri-las.
- **Categorias:** organizar tarefas em Trabalho, Estudo e Casa.
- **Prioridades:** classificar tarefas em Alta, Média e Baixa.
- **Pesquisa:** localizar tarefas pelo nome.
- **Filtros:** visualizar tarefas por categoria, prioridade ou situação.
- **Armazenamento local:** manter as tarefas salvas mesmo após fechar o aplicativo.

## 3. Tecnologias utilizadas

- **Ionic:** framework utilizado para desenvolver a interface do aplicativo.
- **Angular:** framework responsável pela estrutura e lógica da aplicação.
- **TypeScript:** linguagem utilizada na implementação das funcionalidades.
- **HTML e SCSS:** utilizados na estrutura e estilização das telas.
- **Capacitor:** utilizado para integrar o aplicativo ao ambiente Android.
- **Capacitor Preferences:** utilizado para armazenar as tarefas localmente.
- **Android Studio:** utilizado para preparar e executar o aplicativo Android.
- **Visual Studio Code:** ambiente utilizado durante o desenvolvimento.
- **Git e GitHub:** utilizados para o versionamento e compartilhamento do código.

## 4. Como executar o projeto

É necessário ter o Node.js e as ferramentas do Ionic instalados.

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/Micka0612/Gerenciador-de-tarefas-Inteligente.git
cd Gerenciador-de-tarefas-Inteligente
```

Instale as dependências:

```bash
npm install
```

Execute o aplicativo no navegador:

```bash
ionic serve
```

Para preparar a versão Android:

```bash
ionic build
npx cap sync android
npx cap open android
```

A execução no Android requer o Android Studio e o ambiente de desenvolvimento Android configurado.

## 5. Armazenamento de dados

O aplicativo utiliza o Capacitor Preferences para salvar as informações das tarefas no próprio dispositivo.

Dessa forma, os dados permanecem disponíveis após o fechamento do aplicativo, sem a necessidade de um banco de dados externo ou conexão com a internet para o gerenciamento local das tarefas.

## 6. Testes e execução

Durante o desenvolvimento, o aplicativo foi testado no navegador e em um tablet Android físico.

Foram verificadas as funcionalidades de cadastro, edição, exclusão, conclusão, pesquisa, filtros e persistência dos dados.

## 7. Objetivo acadêmico

Este projeto permitiu aplicar conhecimentos de desenvolvimento mobile, programação com Angular, criação de interfaces com Ionic, armazenamento local e integração com Android por meio do Capacitor.

O desenvolvimento também proporcionou experiência com Git e GitHub para organização e compartilhamento do código-fonte.

## 8. Desenvolvedores

Projeto desenvolvido por estudantes do curso de Ciência da Computação da Unochapecó.

**Disciplina:** Desenvolvimento Mobile

**Projeto:** Gerenciador de Tarefas Inteligente

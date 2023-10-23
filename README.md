# tree-checkbox-angularjs

### Sobre o projeto
<p>
  O projeto compreende a implementação de uma árvore de checkboxes desenvolvida com AngularJS, que armazena seus dados no localStorage. Com o objetivo de aprimorar a experiência do usuário, foram incorporadas diversas funcionalidades:
</p>

<ul>
  <li>Optei por um layout limpo, minimizando a poluição visual.</li>
  <li>Quando um elemento pai é marcado, todos os seus filhos são automaticamente selecionados.</li>
  <li>Se todos os filhos forem marcados, o elemento pai tambem é marcado.</li>
  <li>Se apenas alguns elementos filhos estiverem marcados, o elemento pai exibirá um ícone diferenciado.</li>
  <li>Destaque Interativo: Ao posicionar o cursor sobre um elemento pai, todos os filhos são realçados com uma cor de fundo distinta, tornando mais fácil identificar os itens que serão marcados.</li>
  <li>Controle de Visibilidade: Foi incluído um botão para exibir ou ocultar os elementos filhos, oferecendo maior controle sobre a visualização da árvore.</li>
</ul>

<hr />

Instalação das Dependências
```bash
npm install
```

Execute o servidor de desenvolvimento:
```bash
npm start
```
Acesse http://localhost:8080/ para ver o resultado



![arvore-checkbox-2](https://github.com/lenonfelippi/tree-checkbox-angularjs/assets/65905199/6ea843d5-8ef5-4d45-a088-acb7169c1581)

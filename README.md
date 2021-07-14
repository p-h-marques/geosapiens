# Geo Sapiens Formulários

Olá! Aqui é o Pedro, e esse repositório contém o desenvolvimento de 50% da demanda proposta pelo processo seletivo da Geo Sapiens! Foi viabilizado um formulário de preenchimento, cuja estrutura e informações são consumidas através de um API, a qual está fixa para cumprir a entrega. Para dar conta, utilizei os seguintes tópicos:

- **styled components** para deixar os estilos mais organizados;
- **react hooks** como o useState, useEffect e useCallback;
- **context API** para tratar as informações de cursos, filtros e exibições
- **eslint & prettier** para manter o padrão de código consistente;
- **testes funcionais com cypress** para certificar que todos os casos de uso estão perfeitos.

Se quiser visualizar o projeto em produção, ele está acessível [nesse link!](https://geosapiensform.web.app/insert)

## Rodando o projeto

Pra poder clonar e rodar o projeto direitinho, é só mandar aqueles comandos padrão de sempre:

```bash
npm i && npm start
```

Caso você tenha problemas com as quebras de linha do Windows, o comando abaixo corrige automaticamente os arquivos usando o Eslint:

```bash
npm run lint
```

E claro, pra executar os testes no Cypress, você pode usar esse comando:

```bash
npm run test
```

## Features

Entre features propostas de forma obrigatória & opcional pela especificação, por questão de prazo, apenas a parte 1 do desafio foi cumprida, na qual o seguinte foi viabilizado:

- pesquisa no endpoint fornecido para obter estrutura do formulário
- pesquisa no endpoint obtido na documentação para obter informações principais do formulário
- renderização de componentes de formulário de forma dinâmica, variando com a estrutura do formulário
- estado global com informações úteis para os componentes da página
- validações, limpezas e submissões do formulário integradas com o estado global da aplicação.

## Prototipação

Para iniciar a demanda e definir o escopo dos entregáveis, rascunhei e prototipei as telas que seriam desenvolvidas, já prevendo a aparência dos componentes, sua organização e o fluxo de uso. Dá pra conferir o protótipo [nesse link!](https://www.figma.com/file/jpBVoUcKzpUm14gSKhbvzS/PROCESSO-Geo-Sapiens?node-id=0%3A1). Para essa etapa, todos os desafios propostos foram prototipados.


## Desenvolvimento

Após a devida prototipação, iniciei e concluí o desenvolvimento do desafio #1, viabilizando todas as questões supracitadas. Abaixo, comento um pouco sobre alguns pontos importantes:

### Container pra encapsular as infos

Para fins de otimizar o Design System da aplicação, e diminuir a replicação de componentes, criei um container que armazena o `header` e `footer` da página, dinamizando seu recheio.

```js
const Container = (props) => {
    return (
        <ContainerStyles>
            <Header />
            {props.children}
            <Footer />
        </ContainerStyles>
    )
}
```

### Requisições simultâneas no início da página

Para as informações iniciais da página, temos dois endpoints sendo pesquisados: o de informações principais e o de estrutura. E para fins de desempenho, sincronizei as requisições, de forma que retornem e reportem erros de forma simultânea.

```js
/**
 * Requisições simultâneas para obter as informações principais
 * e estruturais do formulário em questão.
 * @returns {object | false}
 */

export async function getInitialData(){
    const requests = await Promise.all([
        getFormInfo(),
        getFormStructure()
    ])

    if(requests[0] && requests[1]){
        const formInfo = {...requests[0].data.form[0]}
        const formStructure = [...requests[1].data.form_structure]
        const formAnswer = getComponentsId(formStructure)

        return {
            formInfo,
            formStructure,
            formAnswer
        }
    }

    return false
}
```

## Objeto global e suas descrições

Para viabilizar todas as features da página, o objeto do estado global da aplicação foi estruturado utilizando o Context API, e tem as seguintes chaves & descrições:

```js
export const initialState = {
    formInfo: {},       // informações principais do formulário
    formStructure: [],  // estrutura do formulário
    formAnswer: {},     // preenchimento do formulário pelo usuário da aplicação
    formErrors: {},     // campos que possuem erros de preenchimento
    appStatus: {        // centralização de status de feedbacks da aplicação
        loading: true,
        error: false,
        send: false
    }
}
```

## Renderização condicional dos componentes do formulário

Um dos principais requisitos da aplicação era não ser fixa a esse formulário em específico, e com isso, a lógica da construção do formulário analisa os tipos dos campos obtidos, e retorna o componente apropriado com as propriedades já sendo passadas para dentro dele.

```js
/**
 * Obtém o componente de formulário de acordo com o tipo de campo passado.
 *
 * @param {string} type Tipo de campo
 * @param {object} props Propriedades a serem passadas ao componente retornado
 * @returns {Component} Componente correspondente ao tipo de campo passado.
 */
function getTypeBlock(type, props) {
    const typesList = {
        textfield:      (<TextField key={props.componentId} {...props}/>),
        checkboxfield:  (<CheckboxField key={props.componentId} {...props}/>),
        ratingfield:    (<RatingField key={props.componentId} {...props}/>),
        datefield:      (<DateField key={props.componentId} {...props}/>),
        urlfield:       (<UrlField key={props.componentId} {...props}/>),
        default:        (<div key={props.componentId}>olha o padrão</div>)
    }

    return typesList[type] || typesList['default']
}
```

## Inversão de obrigatoriedade

Um ponto importante analisado também dentro dos componentes é o preenchimento obrigatório & opcional, o qual eu inverti para homologar as dinâmicas de validação.

## Validação com campos padrão

Para cada tipo de campo, existe uma definição com o valor `default` a ser utilizado, o qual é usado também para comparar se determinado valor está preenchido corretamente ou ainda se manteve intacto.

```js
/**
 * Obtém o valor padrão do campo, utilizando o tipo de campo
 *
 * @param {string} type Tipo do campo
 * @returns {string | number | boolean | date} Valor padrão do campo
 */
export function getDefaultValues(type){
    const typesList = {
        textfield:     '',
        checkboxfield: [],
        ratingfield:   3,
        datefield:     new Date(),
        urlfield:      '',
        default:       ''
    }

    return typesList[type] || typesList['default']
}
```

## Submissão apenas pelo console

Uma das features que estaria pendente é a submissão do formulário, a qual atualmente está viabilizada apenas a nível de feedback do usuário, e um console.log() no navegador com as informações.

## Testes

Para a suíte de testes, utilizei o Cypress para os testes funcionais, nos quais eu testei a grosso modo a validação e funcionamento dos campos, o preenchimento, limpeza e submissão do formulário.

## Possíveis melhorias

Devido ao tempo, entendo que algumas questões importantes escaparam do escopo do projeto, e em uma possível entrega no mundo real, eu levantaria essa importância relativa aos seguintes aspectos:

- **desenvolvimento do desafio #2** - devido ao tempo e para manter a qualidade da entrega, optei em desenrolar realmente apenas o desafio #1.
- **testes unitários** - apesar dos testes funcionais ajudarem no desenvolvimento, refatoração e homologação, entendo que os testes unitários cumpririam melhor o papel durante o TDD. Porém, como estou mais familiarizado com os testes funcionais, optei por utilizá-lo.
- **dinamizar pesquisa inicial** - as pesquisas simultâneas que comentei anteriormente utilizam URLs fixas, conforme documentado. Porém, o ideal era dinamizar esse formulário, já prevendo que essa aplicação estaria em um contexto com multi usuários e multi formulários.
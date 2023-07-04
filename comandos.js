// Menu hamburguer
const toggleBtn = document.querySelector('.btnHamburg')

function toggleMenu() {
  const ul = document.querySelector('ul')
  ul.classList.toggle('active')
  toggleBtn.classList.toggle('active')
}

toggleBtn.addEventListener('click', toggleMenu)


// Animação do texto - > digitação
const textAnimado = document.querySelector('.textAnimadoH')

animaText(textAnimado)

function animaText(elemento) {
  const textArray = elemento.innerHTML.split('')

  elemento.innerHTML = ''

  textArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 60 * i);
  })
}

const textAnimadoo = document.querySelector('.textAnimadoP')

animaText(textAnimadoo)

function animaText(elemento) {
  const textArray = elemento.innerHTML.split('')

  elemento.innerHTML = ''

  textArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 60 * i);
  })
}


// Animação do texto de linguagens - > passar mouse

const html = document.querySelector('#html')
const css = document.querySelector('#css')
const js = document.querySelector('#js')
const ts = document.querySelector('#ts')
const react = document.querySelector('#react')
const vite = document.querySelector('#vite')
const tailwind = document.querySelector('#tailwind')
const boostrap = document.querySelector('#boostrap')
const sass = document.querySelector('#sass')
const node = document.querySelector('#node')
const sql = document.querySelector('#sql')
const git = document.querySelector('#git')

const textMouse = document.querySelector('#textMouse')
const teste = textMouse.innerText

html.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.'
})

html.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

css.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>'
})

css.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

js.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'
})

js.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

ts.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.'
})

ts.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

react.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
})

react.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

vite.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'Vite é uma ferramenta de construção que se destina a oferecer uma experiência de desenvolvimento mais rápida e leve para projetos de web modernos.'
})

vite.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

tailwind.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'Tailwind é um framework CSS que permite há você criar layouts para suas aplicações web utilizando sua estrutura. Ou seja, uma ferramenta que fornece componentes para sua estilização. O propósito geral da criação desse framework é aumentar a velocidade para o desenvolvimento, agilizando os processos de criação de seus web sites.'
})

tailwind.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

boostrap.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma.'
})

boostrap.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

sass.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'O SASS é uma linguagem de extensão do CSS, folhas de estilo com uma sintaxe incrível. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente.'
})

sass.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

node.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'Node.js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador. Com ele, é possível criar praticamente qualquer tipo de aplicações web, desde servidores para sites estáticos e dinâmicos, até APIs e sistemas baseados em microserviços.'
})

node.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

sql.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'O SQL é a linguagem que facilita o trabalho de programadores que precisam, entre outras atividades, armazenar e explorar as informações que estão em um banco de dados. '
})

sql.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})

git.addEventListener('mouseover', function () {

  textMouse.classList.add('active')

  textMouse.innerText = 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.'
})

git.addEventListener('mouseout', function () {

  textMouse.classList.remove('active')
  textMouse.innerText = teste

})






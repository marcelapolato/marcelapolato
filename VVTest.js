import { Selector } from 'testcafe';


fixture `Pesquisa com o QA`.page `https://bit.ly/3jOMrR9`;

const menu = Selector('#menu-item-226')
const nome = Selector('#nf-field-5')
const sobrenome = Selector('#nf-field-6')
const email = Selector('#nf-field-7')
const confEmail = Selector('#nf-field-8')
const tel = Selector('#nf-field-17')
const idade = Selector('#nf-label-class-field-10-0')
const temp = Selector('#nf-field-11')
const tempOption = temp.find('option')
const area = Selector('#nf-field-12')
const areaOption = area.find('option')
const melhoria = Selector('#nf-label-class-field-13-0')
const linguagem = Selector('#nf-field-14')
const resumo = Selector('#nf-field-15')
const enviar = Selector('#nf-field-16')

test('Pesquisa de Perfil, Marcela Polato - VVTest', async t => {

//ACESSANDO A VVTEST //
//PREENCHENDO INFORMAÇÕES DE PERFIL//
await t.click(menu)
       .typeText(nome, 'Marcela')
       .typeText(sobrenome, 'Polato')
       .typeText(email, 'marcelapolato@gmail.com')
       .typeText(confEmail, 'marcelapolato@gmail.com')
       .typeText(tel, '11 98628-0613')
       .click(idade)
       .click(temp)
       .click(tempOption.withText('mais de 5 anos'))
       .click(area)
       .click(areaOption.withText('Desafio'))
       .click(melhoria)
       .typeText(linguagem, 'js e python')
       .typeText(resumo, 'Tenho 10 anos de carreira como QA, trabalhei a maior parte do tempo com testes manuais e meu objetivo é melhorar meu conhecimento técnico, principalmente com automação, o qual tenho cerca de 3 anos de experiência. Me vejo como Pleno caminhando para um perfil Senior e em um futuro não muito distante, gostaria de continuar minha carreira em um cargo de Coordenação/Gestão de equipe. Tenho perfil colaborativo, paciente, analitico e detalhista.')
       .click(enviar)

});
import PptxGenJS from 'pptxgenjs'
// import pptxgen from 'pptxgenjs'
import { IPresentaion } from 'types'

export const generatePresentation = (data: IPresentaion) => {
  // 1. Create a new Presentation
  const pres = new PptxGenJS()
  pres.layout = 'LAYOUT_WIDE'
  pres.defineSlideMaster({
    title: 'MASTER_SLIDE',
    background: { color: 'E7E6E6' },
    slideNumber: { x: 0.3, y: '90%' },
    objects: [
      {
        rect: {
          x: '97%',
          w: 0.8,
          h: 4,
          fill: { color: 'ed7d31' },
          line: { color: 'black', width: 1, dashType: 'solid' },
        },
      },
    ],
  })

  const slide1 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  slide1.addText(data.name, {
    x: '13%',
    y: '40%',
    fontSize: 60,
    bold: true,
    align: 'center',
    shape: pres.ShapeType.rect,
    rectRadius: 0.5,
    fill: { color: 'ed7d31' },
    fontFace: 'consolas',
  })
  slide1.addText(data.losung, {
    x: '13%',
    y: '55%',
    fontSize: 30,
    bold: true,
    align: 'center',
    color: 'ed7d31',
    fontFace: 'consolas',
  })
  slide1.addImage({
    data: 'image/png;base64,' + data.logo,
    w: 2,
    h: 2,
    x: '43%',
    y: '5%',
  })

  const slide2 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  // const titleStyles = { x: '50%', y: '50%', fontSize: 40 }
  slide2.addText('Проблема', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
    fontFace: 'consolas',
  })
  slide2.addText('Проблема 1', {
    x: '5%',
    y: '25%',
    fontSize: 20,
    bold: true,
    fontFace: 'consolas',
  })
  slide2.addText(data.problem_1, {
    x: '5%',
    y: '30%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide2.addText('Проблема 2', {
    x: '5%',
    y: '40%',
    fontSize: 20,
    bold: true,
    fontFace: 'consolas',
  })
  slide2.addText('Дефицит товара', {
    x: '5%',
    y: '45%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide2.addText('Проблема 3', {
    x: '5%',
    y: '55%',
    fontSize: 20,
    bold: true,
    fontFace: 'consolas',
  })
  slide2.addText('Ограниченный бюджет', {
    x: '5%',
    y: '60%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  // slide2.addImage({ path: '../assets/problem.png' })

  const slide3 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  // const titleStyles = { x: '50%', y: '50%', fontSize: 40 }
  slide3.addText('Решение', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
    fontFace: 'consolas',
  })
  slide3.addText('Решение 1', {
    x: '5%',
    y: '25%',
    fontSize: 20,
    bold: true,
    fontFace: 'consolas',
  })
  slide3.addText(data.solve_1, {
    x: '5%',
    y: '30%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide3.addText('Решение 2', {
    x: '5%',
    y: '40%',
    fontSize: 20,
    bold: true,
    fontFace: 'consolas',
  })
  slide3.addText('Нанять сотрудников', {
    x: '5%',
    y: '45%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide3.addText('Решение 3', {
    x: '5%',
    y: '55%',
    fontSize: 20,
    bold: true,
    fontFace: 'consolas',
  })
  slide3.addText('Заинтересовать инвесторов', {
    x: '5%',
    y: '60%',
    fontSize: 20,
    fontFace: 'consolas',
  })

  const slide4 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  // const titleStyles = { x: '50%', y: '50%', fontSize: 40 }
  slide4.addText('Описание продукта', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
    fontFace: 'consolas',
  })
  slide4.addText('Краткое описание продукта', {
    x: '5%',
    y: '25%',
    fontSize: 20,
    bold: true,
    fontFace: 'consolas',
  })
  slide4.addText(data.description, {
    x: '5%',
    y: '30%',
    fontSize: 20,
    fontFace: 'consolas',
  })

  const slide5 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  // const titleStyles = { x: '50%', y: '50%', fontSize: 40 }
  slide5.addText('Рынок', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
    fontFace: 'consolas',
  })
  slide5.addText(data.tam, {
    x: '5%',
    y: '30%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide5.addShape(pres.ShapeType.rect, {
    y: '60%',
    x: '11%',
    h: '30%',
    fill: { type: 'solid', color: 'ed7d31' },
  })
  slide5.addText(String(data.price + ' ₽'), {
    y: '95%',
    x: '10%',
    fontSize: 20,
    fontFace: 'consolas',
  })

  slide5.addShape(pres.ShapeType.rect, {
    x: '47%',
    y: '50%',
    h: '40%',
    fill: { type: 'solid', color: 'ed7d31' },
  })

  slide5.addText(String(data.income + data.price + ' ₽'), {
    y: '95%',
    x: '46%',
    fontSize: 20,
    fontFace: 'consolas',
  })

  slide5.addShape(pres.ShapeType.rect, {
    x: '83%',
    y: '40%',
    h: '50%',
    fill: { type: 'solid', color: 'ed7d31' },
  })

  slide5.addText(String(data.income * 2 + data.price + ' ₽'), {
    y: '95%',
    x: '82%',
    fontSize: 20,
    fontFace: 'consolas',
  })

  const slide6 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  slide6.addText('Конкуренты', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
  })
  slide6.addText(data.rival_1, {
    x: '5%',
    y: '30%',
    bullet: true,
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide6.addText('Amazon', {
    x: '5%',
    y: '40%',
    bullet: true,
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide6.addText('Apple', {
    x: '5%',
    y: '50%',
    bullet: true,
    fontSize: 20,
    fontFace: 'consolas',
  })

  const slide7 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  slide7.addText('Финансы', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
  })
  slide7.addText('Доход: ' + String(data.income) + ' ₽', {
    x: '5%',
    y: '30%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide7.addText('Себестоимость: ' + String(data.price) + ' ₽', {
    x: '5%',
    y: '40%',
    fontSize: 20,
  })
  slide7.addText('Количество клиентов: ' + String(data.clients), {
    x: '5%',
    y: '50%',
    fontSize: 20,
    fontFace: 'consolas',
  })

  const slide8 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  slide8.addText('Команда', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
    fontFace: 'consolas',
  })
  slide8.addText('Имя: ' + data.member1.memberName_1, {
    x: '5%',
    y: '30%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide8.addText('Фамилия: ' + data.member1.memberSurname_1, {
    x: '5%',
    y: '35%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide8.addText('Бекграунд: ' + data.member1.background_1, {
    x: '5%',
    y: '40%',
    fontSize: 20,
    fontFace: 'consolas',
  })

  slide8.addText('Имя: Кирилл', {
    x: '50%',
    y: '30%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide8.addText('Фамилия: Игнатьев', {
    x: '50%',
    y: '35%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide8.addText('Бекграунд: Бекенд-разработчик', {
    x: '50%',
    y: '40%',
    fontSize: 20,
    fontFace: 'consolas',
  })

  const slide9 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  slide9.addText('Цели проекта (Roadmap)', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
    fontFace: 'consolas',
  })
  slide9.addText(data.goal_1, {
    x: '5%',
    y: '30%',
    bullet: true,
    fontSize: 20,
    fontFace: 'consolas',
  })

  const slide10 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  slide10.addText('Контакты', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
    fontFace: 'consolas',
  })
  slide10.addText('Контактный номер: ' + data.phone, {
    x: '5%',
    y: '30%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide10.addText('Telegram: @' + data.telegram, {
    x: '5%',
    y: '35%',
    fontSize: 20,
    fontFace: 'consolas',
  })
  slide10.addText('Сайт: ' + data.website, {
    x: '5%',
    y: '40%',
    fontSize: 20,
    fontFace: 'consolas',
  })

  // 4. Save the Presentation
  return pres.writeFile({
    fileName: `Презентация "${data.name}".pptx`,
    compression: true,
  })
  // .then((fileName) => {
  //   alert(`Сгенерирована презентация: ${fileName}`)
  // })
}

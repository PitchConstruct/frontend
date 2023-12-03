import PptxGenJS from 'pptxgenjs'
// import pptxgen from 'pptxgenjs'
import { IPresentaion } from 'types'

export const generatePresentation = (data: IPresentaion) => {
  // 1. Create a new Presentation
  // const pres = new pptxgen()

  const pres = new PptxGenJS()
  pres.layout = 'LAYOUT_WIDE'
  pres.defineSlideMaster({
    title: 'MASTER_SLIDE',
    background: { color: 'FFFFFF' },
    objects: [
      {
        rect: { x: 0.0, y: 5.3, w: '100%', h: 0.75, fill: { color: 'F1F1F1' } },
      },
      // {
      //   text: {
      //     text: 'Status Report',
      //     options: { x: 3.0, y: 5.3, w: 5.5, h: 0.75 },
      //   },
      // },
    ],
    slideNumber: { x: 0.3, y: '90%' },
  })

  const slide1 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  // const titleStyles = { x: '50%', y: '50%', fontSize: 40 }
  slide1.addText(data.name, {
    x: '13%',
    y: '40%',
    fontSize: 60,
    bold: true,
    align: 'center',
  })
  slide1.addText(data.slogan, {
    x: '13%',
    y: '50%',
    fontSize: 30,
    bold: true,
    align: 'center',
    color: 'ed7d31',
  })

  slide1.background = { color: 'e7e6e6' }

  const slide2 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  // const titleStyles = { x: '50%', y: '50%', fontSize: 40 }
  slide2.addText('Проблема', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
  })
  slide2.addText('Проблема 1', {
    x: '5%',
    y: '25%',
    fontSize: 20,
    bold: true,
  })
  slide2.addText(data.problem_1, {
    x: '5%',
    y: '30%',
    fontSize: 20,
  })

  slide2.background = { color: 'e7e6e6' }

  const slide3 = pres.addSlide({ masterName: 'MASTER_SLIDE' })
  // const titleStyles = { x: '50%', y: '50%', fontSize: 40 }
  slide3.addText('Решение', {
    x: '5%',
    y: '15%',
    fontSize: 60,
    bold: true,
  })
  slide3.addText('Решение 1', {
    x: '5%',
    y: '25%',
    fontSize: 20,
    bold: true,
  })
  slide3.addText(data.solve_1, {
    x: '5%',
    y: '30%',
    fontSize: 20,
  })

  slide3.background = { color: 'e7e6e6' }

  // 4. Save the Presentation
  return pres.writeFile({
    fileName: `Презентация "${data.name}".pptx`,
    compression: true,
  })
  // .then((fileName) => {
  //   alert(`Сгенерирована презентация: ${fileName}`)
  // })
}

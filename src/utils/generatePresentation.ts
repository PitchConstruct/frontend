import pptxgen from 'pptxgenjs'
import { IPresentaion } from 'types'

export const generatePresentation = (data: IPresentaion) => {
  // 1. Create a new Presentation
  const pres = new pptxgen()

  // 2. Add a Slide
  const slide = pres.addSlide()

  // 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide
  const title = data.name
  const titleStyles = { x: 1, y: 1, fontSize: 40 }
  slide.addText(title, titleStyles)

  // 4. Save the Presentation
  return pres.writeFile({ fileName: `Презентация ${data.name}.pptx` })
  // .then((fileName) => {
  //   alert(`Сгенерирована презентация: ${fileName}`)
  // })
}

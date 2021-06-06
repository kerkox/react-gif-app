import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Pruebas de <GifExpertApp />', () => {
  test('debe de mostrarse correctamente', () => {
    let wrapper = shallow(<GifExpertApp />)
    expect( wrapper ).toMatchSnapshot()
    
  })

  test('debe de mostrar una lista de categorias', () => {

    const categories = ['One Punch', 'Dragon ball']
    const wrapper = shallow( <GifExpertApp defaultCategories={categories} />)

    expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('GifGrid').length ).toBe(categories.length)
    
  })
  
  
  
})

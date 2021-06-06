import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom'

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })

  test("debe de mostrarase correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", {target: {value}});
    expect(wrapper.find('p').text().trim()).toBe( value )
  });


  test('No debe de postear la informacion con submit ', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect( setCategories ).not.toHaveBeenCalled()
  })


  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
      const input = wrapper.find("input");
      const value = "Hola Mundo";
      input.simulate("change", { target: { value } });

      wrapper.find("form").simulate("submit", { preventDefault() {} });
      let inputValue = wrapper.find('p').text().trim()
      expect( setCategories ).toHaveBeenCalled();
      expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));

      expect(inputValue).toBe('')

  })
  



  
});

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas de <GifGrid />", () => {
  let category = "One Punch";
  test("debe de mostrarse correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    let wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: 'ABC',
        url:'https://localhost/cualquier/cosa.jpg',
        title:'Cualquier cosa'
      },
      {
        id: '123',
        url:'https://localhost/cualquier/cosa.jpg',
        title:'Cualquier cosa'
      },
    ]
    
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: true,
    });
    let wrapper = shallow(<GifGrid category={category} />);
    // expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('p').exists()).toBe(false)
    expect( wrapper.find('GifGridItem').length).toBe(gifs.length)
  });
});

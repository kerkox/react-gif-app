import { getFetchGifs } from "../../helpers/GetFetchGifs";


describe("Pruebas con getFetchGifs ", () => {

  test('debe de traer 10 elementos', async() => {
    const gifs = await getFetchGifs('one punch');

    expect( gifs.length ).toBe(10)
  })
  
  test('debe de traer 0 elementos', async() => {
    const gifs = await getFetchGifs('');

    expect( gifs.length ).toBe(0)
  })
});

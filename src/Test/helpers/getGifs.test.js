const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas con getGifs Fetch', () => {
    
    test('Debe traer 10 elementos', async () => {
        
        const gifs = await getGifs('The Office');
        expect ( gifs.length ).toBe( 10 );
    })

    test('Se debe retornar 0 elementos', async() => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );
    })
    
    
})



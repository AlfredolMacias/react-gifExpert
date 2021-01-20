import React from 'react';
const { shallow } = require("enzyme")
const { GifGrid } = require("../../components/GifGrid")
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('', () => {

    const category = 'Taken';
    
    test('Debe coincidir el snapshot con el componente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category = { category }/>);

        expect ( wrapper ).toMatchSnapshot();
    })
    
    test('Debe mostrar items cuando se cargan imagenes con useFetcgGif', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost',
            title:  'El titulo'
        },{
            id: 'ABC',
            url: 'https://localhost',
            title:  'El titulo'
        }
    
    ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category = { category }/>);
        
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );

        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);

    })
    
})

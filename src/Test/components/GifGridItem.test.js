import React from 'react';
import { shallow } from 'enzyme'
// import { GifGridItem } from '../../components/GifGridItem';
import { GifGridItem } from '../../components/GifGridItem'
// import { GifGridItem } from '../../components/GifGridItem';

describe('Primera prueba sobre GIfGridItem', () => {
    
    const title = "Titulo";
    const url   = "https://localhost/urlPrueba";
    
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('Debe mostrar el contenido de GifGridItem correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe tener un parrafo con el title ', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('Debe tener una imagen con la url y alt correcta', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('El Div debe contener la clase animated_fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes(' animate__fadeIn') ).toBe( true );
    })
    
    
    
})

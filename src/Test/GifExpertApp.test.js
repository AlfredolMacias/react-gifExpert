import React from 'react';
const { shallow } = require("enzyme");
const { GifExpertpp } = require("../GifExpertpp");


describe('Pruebas con el componente <GifExpertApp />', () => {
    
    
    test('Debe coincidir el snapshot', () => {
        const wrapper = shallow( <GifExpertpp />)
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe mostrar una lista de categorias', () => {
        
        const categories = ['The Office', 'Brooklyn 99'];
        const wrapper = shallow( <GifExpertpp defaultCategories= { categories } />);
        
        expect ( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
        
    })
    


    
})

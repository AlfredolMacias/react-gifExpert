import React from 'react';
const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")

describe('Pruebas en el componente <AddCategory/>', () => {
    
    const setCategories = jest.fn();
    let  wrapper = shallow( <AddCategory setCategories = { setCategories } />);
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories = { setCategories } />);
    })
    

    test('Debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Evaluar los cambios en el input', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value ); 
    })
    
    test('No debe de postear la info onSubmit', () => {
    
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('Debe de llamar el setCategory y limpiar la caja de texto', () => {
        const value = 'Hoal';
        //  1. Simula el inputChange
        wrapper.find('input').simulate('change', { target: { value } });
        
        // 2. Simula el Submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        // 3.- setCategories es llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
        
        // El input debe estar vacio
        expect( wrapper.find('input').prop('value') ).toBe(''); 
    })
    
    
})

import { wait } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';  


describe('Pruebas en el hook <useFetchGifs/>', () => {
        
    // const {data:images,  loading } = useFetchGifs( 'The Office' );
    test('Debe retornar el estado inicial ', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'The Office' ) ) ;
        const { data, loading } = result.current;
        
        await waitForNextUpdate();
        expect ( data ).toEqual([]);
        expect ( loading ).toBe( true);
    })

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'The Office' ) ) ;
        await waitForNextUpdate();
        
        const { data, loading } = result.current;
        


        expect ( data.length ).toBe(10);
        expect ( loading ).toBe( false);

    })
    
    

})

import React from 'react';
import Paginations from '../../components/Paginacao';
import NavBarHome from '../NavBarHome';



const Home = () =>{
    
    return(
        <>
            <NavBarHome />
            <div >
                <Paginations />
            </div>
        </>
    )
}

export default Home;
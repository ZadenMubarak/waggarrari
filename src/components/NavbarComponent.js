import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

import { useMediaQuery } from 'react-responsive';

import './Navbar.css'
import bull from './WAGGARRARI.png'



const NavbarComponent = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

    const items = [
        { label: 'Create', icon: 'pi pi-plus' },
        { label: 'Update', icon: 'pi pi-refresh' },
        { label: 'Delete', icon: 'pi pi-trash' },
    ];
  const startContent = (
    <React.Fragment>
      {(isDesktop || isTablet) && (
        <Button className="mr-2" text raised>
            <img alt="logo" src={bull} className="h-2rem"></img>
            <span style={{ color: "white", fontFamily: 'Silkscreen, serif' }}>WAGGARARI</span>
        </Button>
      )}
      {isMobile && (
        <Button className="mr-2" text raised>
            <img alt="logo" src={bull} className="h-2rem"></img>
        </Button>
      )}

    </React.Fragment>
  );

  const endContent = (
    <React.Fragment>

      
      {isDesktop && (
        <>
        <Link to="how-to-buy" smooth={true} duration={500}>
          <Button label="How to Buy" className="mr-2" text style={{color:"white", fontFamily: 'Silkscreen, serif'}}/>
        </Link>
        </>
        )}
        <Button label="Buy Now" className="mr-2" severity='info'style={{fontFamily: 'Silkscreen, serif'}} />
      
      {/* <Button label="Buy Now" className="mr-2" severity='info'/> */}
    </React.Fragment>
  );

  return (
    <div className='flex pt-4' style={{fontFamily: 'Silkscreen, serif'}}>
      <Toolbar start={startContent} end={endContent} style={{width:"95%", zIndex:"1"}} className='toolBar '/>
      
    </div>
  );
};

export default NavbarComponent;

import React from 'react';

export default function MyNavBarBrand({ NavbarBrand, UncontrolledTooltip }) {
  return (
    <React.Fragment>
      <NavbarBrand
        href="/"
        id="navbar-brand"
      >
        NeverNotMoving
    </NavbarBrand>
      <UncontrolledTooltip target="#navbar-brand">
        Triathlon & Endurance coaching
        </UncontrolledTooltip>
    </React.Fragment>


  )
}
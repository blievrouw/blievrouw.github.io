import React from "react";
import { Link } from "react-router-dom";

import MyNavBarBrand from './MyNavBarBrand';
import { FACEBOOK_URL, INSTAGRAM_URL, STRAVA_URL } from '../../constants';

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <MyNavBarBrand NavbarBrand={NavbarBrand} UncontrolledTooltip={UncontrolledTooltip} />

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="/about"
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>Over mezelf</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/who"
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>Voor wie</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  // href="/offerings"
                  nav
                >
                  <p>Aanbod</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/offerings/coaching" tag={Link}>
                    Trainingsbegeleiding
                  </DropdownItem>
                  <DropdownItem
                    href="/offerings/schedules"
                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    Trainingsschema's
                  </DropdownItem>
                  <DropdownItem
                    href="/offerings/tests"
                  >
                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    Inspanningstesten
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="/pictures"
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>Fotogallerij</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href={INSTAGRAM_URL}
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Volg me op instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href={FACEBOOK_URL}
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Voeg me toe op facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href={STRAVA_URL}
                  target="_blank"
                  id="strava-tooltip"
                >
                  <i className="fab fa-strava"></i>
                  <p className="d-lg-none d-xl-none">Strava</p>
                </NavLink>
                <UncontrolledTooltip target="#strava-tooltip">
                  Volg men Strava activiteit
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;

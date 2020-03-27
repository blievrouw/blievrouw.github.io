/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                Aanbod
                </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Over mij
                </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Blog
                </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © Kaz Verstraete
          </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;

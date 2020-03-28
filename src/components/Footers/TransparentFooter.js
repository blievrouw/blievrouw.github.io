/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/about"
                // target="_blank"
              >
                Over mezelf
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

export default TransparentFooter;

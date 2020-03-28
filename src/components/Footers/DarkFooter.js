/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div>
          <div>Never Not Moving</div>
          <div>Johannes Schrantstraat 89</div>
          <div>9000 Gent</div>
          <div>www.nevernotmoving.be</div>
          <div>info@nevernotmoving.be</div>
          <div>Ondernemingsnummer 0737.424.088</div>
          <div>BE24 3631 9447 5138</div>
        </div>
        <div className="copyright" id="copyright">
          © Kaz Verstraete
          </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;

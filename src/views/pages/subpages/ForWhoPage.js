import React from 'react';
import LandingPage from '../LandingPage';
import LandingPageHeader from '../../../components/Headers/LandingPageHeader';

import {
  Container,
  Row,
  Col
} from "reactstrap";

function ForWhoPage(props) {
  return (
    <LandingPage {...props} >
      <LandingPageHeader
        title="Voor wie"
        imgUrl={'https://static.wixstatic.com/media/9a4459_3ebba269befb4060a64656409bbcc288~mv2_d_4032_3024_s_4_2.jpeg/v1/fill/w_1213,h_910,al_c,q_90,usm_0.66_1.00_0.01/9a4459_3ebba269befb4060a64656409bbcc288~mv2_d_4032_3024_s_4_2.webp'}
      />
      <div className="section section-for-who">
        <Container>
          <Row>
            <Col md="12" className="text-center">
            <p>Alle gedreven avonturiers met een gezonde dosis ambitie zijn welgekomen</p>
            
            <ul className="text-left">
            <p>Concreter:</p>
              <li>Je hebt ambitie om aan enkele massalopen deel te nemen, maar wil iemand die waakt over je trainingen</li>
              <li>Je wil trainen voor je eerste marathon maar zoekt iemand die sturing en richting geeft</li>
              <li>Je hebt al enkele marathons gelopen en wil die tijd nu toch echt wel scherper stellen</li>
              <li>Je wil de wondere wereld van het trailrunnen ontdekken</li>
              <li>Je hebt een specifieke trailrun voor ogen en wil hier in topconditie aan de start staan</li>
              <li>Triatlon, de ultieme uithoudingssport, maar hoe eraan te beginnen?</li>
              <li>De kwarttriatlon heeft geen geheimen meer, op naar de volgende afstanden?</li>
              <li>In topconditie aan de start van nationale of internationale triatlon wedstrijden (Challenge / Ironman / ...)</li>
              <li>...</li>
            </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </LandingPage>
  )
}

export default ForWhoPage;
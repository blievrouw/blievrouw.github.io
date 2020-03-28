import React from 'react';
import LandingPage from '../LandingPage';
import LandingPageHeader from '../../../components/Headers/LandingPageHeader';

import {
  Container,
  Row,
  Col
} from "reactstrap";

function TestingOfferingPage(props) {
  return (
    <LandingPage {...props} >
      <LandingPageHeader
        title="Inspanningstesten"
        imgUrl={'https://upload.wikimedia.org/wikipedia/commons/4/4f/Lactate-01.png'}
      />
      <div className="section section-offerings-tests">
        <Container>
          <p className="text-center">Inspanningstesten zijn nuttig voor atleten van alle niveaus.<br />Trainingen voorschrijven zonder weet te hebben van het fysiologisch profiel blijft wat natte vingerwerk. Door een korte inspanningstest af te nemen kunnen we nadien met grotere zekerheid de trainingen bepalen om efficiënter het gewenste trainingseffect uit te lokken.</p>

          <Row className="mb-4">
            <Col md="7" >
              <p className="text-center">
                Tijdens een progressieve inspanningsproef worden jouw hartslag, lactaat & rate of perceived effort (Gevoelswaarde) gemeten. Op basis hiervan worden nadien de individuele trainingszones bepaald, zodat je veel gerichter kan trainen richting jouw doelen. Looptesten worden afgenomen op plaatselijke looppiste (regio Brugge of Gent). Fietstesten in Gent of in Brugge op een ergometer met jouw eigen fiets.

                Test aan huis ook mogelijk.
              </p>
            </Col>

            <Col md="5" >
              <div className="image-container image-left" style={{ height: '300px', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://static.wixstatic.com/media/9a4459_b07a1a7dbd6945de8326b76ea3e08e70~mv2.jpg/v1/fill/w_320,h_422,al_c,q_80,usm_0.66_1.00_0.01/82490373_508972659739253_529860957578251.webp)' }}>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <p className="lead text-center">Looptest</p>
              <ul>
                <li>Opwarmen op piste</li>
                <li>Opbouwende inspanningen, tot maximaal</li>
                <li>Metingen van lactaat tussen iedere trap, ook registratie van hartslag, en rate of perceived effort (Gevoelswaarde)</li>
                <li>Nadien volgt een uitgebreid verslag met uitleg, trainingszones & trainingsadvies</li>
              </ul>
              <div className="text-center">
                <span class="badge badge-info">
                  €50
              </span>
              </div>
              <div className="text-center">
                <span class="badge badge-info">
                  €90 Lactaattest met basisschema voor 12 weken
              </span>
              </div>

            </Col>
            <Col md="6">
              <p className="lead text-center">Fietstest</p>
              <ul>
                <li>Installeren van de fiets, en kort overleg</li>
                <li>Opwarming</li>
                <li>Opbouwende test tot uitputting, met iedere trap meting van lactaat, hartslag, en gevoelswaarde</li>
                <li>Uitfietsen</li>
                <li>Mogelijkheid tot douchen</li>
                <li>Nabespreking</li>
                <li>Uitgebreid verslag met uitleg, trainingszones & advies</li>
              </ul>
              <div className="text-center">
                <span class="badge badge-info">
                  €75
              </span>
              </div>
              <div className="text-center">
                <span class="badge badge-info">
                  €115 met basisschema voor 12 weken
              </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LandingPage>
  )
}

export default TestingOfferingPage;
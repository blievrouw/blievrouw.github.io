import React from 'react';
import LandingPage from '../LandingPage';
import LandingPageHeader from '../../../components/Headers/LandingPageHeader';
import schedulesOfferingImg from '../../../assets/img/kaz/schedules_offering_bg.png';
import {
  Container,
  Row,
  Col
} from "reactstrap";

function ScheduleOfferingPage(props) {
  return (
    <LandingPage {...props} >
      <LandingPageHeader
        title="Trainingsschema's"
        imgUrl={schedulesOfferingImg}
      />
      <div className="section section-offerings-schedules">
        <Container>
          <Row>
            <Col md="12" className="text-center">
              <p className="text-center">Denk je gebaat te zijn bij meer gestructureerde trainingen, maar geen nood aan persoonlijke begeleiding? Dan kan ik je altijd op weg helpen met een persoonlijk trainingschema.</p>

              <p className="lead">Hoe gaan we te werk?</p>
              <p className="text-center">Intakegesprek (Telefonisch of via Skype) waarin je doel, trainingsgeschiedenis en beschikbare trainingstijd worden besproken. Hierop volgend ontvang je een link om een profiel op Trainingpeaks aan te maken, of jouw bestaande profiel aan het mijne te koppelen. Het schema wordt op dit online platform opgeladen, en ik help je wat op weg. Hierna ga je zelfstandig aan de slag met de trainingen.</p>

            </Col>
          </Row>

          <Row>
            <Col md="12"><h4 className="text-center">Opties</h4></Col>
          </Row>

          <Row>
            <Col md="12" >
              <p className="lead">Hardlopen&nbsp;&nbsp;<span class="badge badge-info">€40 voor 12 weken</span></p>
              <p className="ml-1">Stratenlopen van 5 km tot marathon, trails tot 100km. Een langere opbouw is per maand verlengbaar</p>
            </Col>
          </Row>


          <Row>
            <Col md="12" >
              <p className="lead">Triatlon / Duatlon&nbsp;&nbsp;<span class="badge badge-info">€80 per 16 weken</span></p>
              <p className="ml-1">Een langere opbouw is per maand verlengbaar</p>
            </Col>
          </Row>

          <Row>
            <Col md="12"><h4 className="text-center">Richtlijnen opbouw</h4></Col>
          </Row>
          <Row>
            <Col md="12" >
              <ul>
                <li>Kwart triatlon <span class="badge badge-info">16 weken</span></li>
                <li>Halve triatlon <span class="badge badge-info">20 weken</span></li>
                <li>Volledige triatlon <span class="badge badge-info">24 weken</span></li>
                <li>Marathon <span class="badge badge-info">24 weken</span></li>
                <li>Halve marathon <span class="badge badge-info">15 weken</span></li>
              </ul>
              <p>Neem zeker ook een kijkje bij de <a href="/offerings/tests">inspanningstesten</a>. Mogelijkheid tot het koppelen van een inspanningstest aan een 12 weken basisschema.</p>

            </Col>
          </Row>
        </Container>
      </div>
    </LandingPage>
  )
}

export default ScheduleOfferingPage;
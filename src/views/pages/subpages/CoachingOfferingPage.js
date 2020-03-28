import React from 'react';
import LandingPage from '../LandingPage';
import LandingPageHeader from '../../../components/Headers/LandingPageHeader';
import coachingOfferingBgImage from '../../../assets/img/kaz/coaching_offering_bg.png';
import {
  Container,
  Row,
  Col
} from "reactstrap";

function CoachingOfferingPage(props) {
  return (
    <LandingPage {...props} >
      <LandingPageHeader
        title="Trainingsbegeleiding / Coaching"
        imgUrl={coachingOfferingBgImage}
      />
      <div className="section section-offerings-coaching">
        <Container>
          <p className="text-center">Met de trainingsbegeleiding/coaching spelen we heel kort op de bal. Sterke wisselwerking tussen coach en atleet. Hierdoor perfect geschikt voor atleten die graag vragen stellen, behoefte hebben aan een goed & frequent contact, en die net dat ietsje meer willen. Hoge maat van flexibiliteit in je schema: Als er onverwacht iets in je week tussenkomt, wordt het schema aangepast. Vragen worden heel snel beantwoord via Whatsapp / Messenger.</p>
          <Row>
            <Col md="12" >

              <p className="lead">Hardlopen / Trails</p>
              <ul>
                <li>Opstellen jaarplanning</li>
                <li>Account in Trainingpeaks</li>
                <li>Dagelijkse analyse en bijsturing indien nodig</li>
                <li>Vlotte communicatie via de hedendaagse kanalen, 7/7 bereikbaar</li>
                <li>Occasionele trainingen samen ifv de geplande evenementen</li>
                <li>50% korting op 1 lactaattest per 6 maanden</li>
                <li>Sporadische mails met bijkomende trainingsinformatie</li>
              </ul>
              <p className="text-center">
                <span class="badge badge-info">€50 per maand, minstens 6 maand engagement, nadien elke maand opzegbaar</span>
                </p>
            </Col>
          </Row>
          <Row>
            <Col md="12" >
              <p className="lead">Triatlon / Duatlon</p>
              <ul>
                <li>Uitgebreid intakegesprek: In persona of via Skype</li>

                <li>Opstellen jaarplanning</li>

                <li>Account in Trainingpeaks</li>

                <li>Dagelijkse analyse en bijsturing indien nodig</li>

                <li>Vlotte communicatie via de hedendaagse kanalen, 7/7 bereikbaar</li>

                <li>Occasionele trainingen samen ifv de geplande evenementen</li>

                <li>Sporadische mails met bijkomende trainingsinformatie</li>
                <li>Per jaar 1 fietstest inbegrepen & looptest aan verminderd tarief (€30 ipv. €50)</li>
              </ul>
              <p className="text-center">
                <span class="badge badge-info">€90 per maand, minstens 6 maand engagement, nadien elke maand opzegbaar</span>
                </p>
            </Col>
          </Row>
        </Container>
      </div>
    </LandingPage>
  )
}

export default CoachingOfferingPage;
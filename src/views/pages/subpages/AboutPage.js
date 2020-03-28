import React from 'react';
import LandingPage from '../LandingPage';
import LandingPageHeader from "../../../components/Headers/LandingPageHeader.js";
import littleKazImg from '../../../assets/img/kaz/little_kaz.png';

import {
  Container,
  Row,
  Col
} from "reactstrap";

export default function AboutPage(props) {
  return (
    <LandingPage {...props} >
      <LandingPageHeader
          title="Over mezelf"
          imgUrl={'https://static.wixstatic.com/media/9a4459_450ca157e1f8434987d2ccfa51196989~mv2_d_3761_2503_s_4_2.jpeg/v1/fill/w_732,h_487,al_c,q_90,usm_0.66_1.00_0.01/9a4459_450ca157e1f8434987d2ccfa51196989~mv2_d_3761_2503_s_4_2.webp'}
        />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title"><span style={{ whiteSpace: 'nowrap' }}>Kaz Verstraete</span> & <span style={{ whiteSpace: 'nowrap' }}>Never Not Moving</span></h2>
                <h5 className="description">
                  Ik ben Kaz Verstraete. Ook al reed ik als kleuter met mijn mini fietsje recht de gracht in, het weerhield mij niet een leven op te bouwen vol liefde voor de (duur)sport. Integendeel. Never not moving. Altijd in beweging. Zowel naar sportieve doelen toewerken en de eindmeet halen, als zich persoonlijk blijven ontwikkelen. Hoe mensen zich persoonlijk ontwikkelen is grotendeels individueel. Maar naar sportieve doelen toewerken, hierin kan ik mijn steentje bijdragen. Ik hoop mijn passie voor uithoudingssporten en de Zwitserse Alpen op anderen over te dragen, en hiermee hen hun beste zelf te laten ontdekken.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      // backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
                      backgroundImage: `url(${littleKazImg})`

                    }}
                  >
                    {/* <p className="blockquote blockquote-info">
                      "Ook al reed ik als kleuter met mijn mini fietsje recht de gracht in, het weerhield mij niet een leven op te bouwen vol liefde voor de (duur)sport" <br></br>
                      <br></br>
                      <small>-Kaz</small>
                    </p> */}
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      height: 500,
                      // backgroundImage: "url(" + require("assets/img/bg1.jpg") + ")"
                      backgroundImage: 'url(https://static.wixstatic.com/media/9a4459_086345bfe4804e7e868277612a975b07~mv2.jpg/v1/fill/w_960,h_720,al_c,q_90/9a4459_086345bfe4804e7e868277612a975b07~mv2.webp)'
                    }}
                  ></div>
                </Col>
              </Row>
              <Row>
                <Col md="7">
                  <br />
                  <h3>
                    Opleidingen
                  </h3>
                  <ul>
                    <li>Master Toegepaste Economische Wetenschappen (Universiteit Gent)</li>
                    <li>IRONMAN Certified Coach</li>
                    <li>Initiator Triatlon (VTS)</li>
                    <li>Gestart met Trainer B (VTS) 2020</li>
                    <li>Vele workshops, oa Triathloncongres Leuven, The Workload injury puzzle - Tim Gabett, cursus lactaattesten bij ICZO,..</li>
                  </ul>
                </Col>
                <Col md="5">
                  <div
                    className="image-container"
                    style={{
                      // backgroundImage: "url(" + require("assets/img/bg1.jpg") + ")"
                      backgroundImage: 'url(https://static.wixstatic.com/media/9a4459_2fc0cd04cf6f4266b500b7d316d8e306~mv2.jpg/v1/fill/w_808,h_450,al_c,q_85,usm_0.66_1.00_0.01/IMG_3934_JPG.webp)'
                    }}
                  ></div>
                </Col>
              </Row>
              <Row>
                <Col md="5">
                  <div
                    className="image-container"
                    style={{
                      // backgroundImage: "url(" + require("assets/img/bg1.jpg") + ")"
                      backgroundImage: 'url(https://static.wixstatic.com/media/9a4459_18c592b57b154b36b3c00e3d6d03afce~mv2.jpg/v1/fill/w_676,h_1188,al_c,q_85,usm_0.66_1.00_0.01/71591762_747161952393116_559012112655974.webp)'
                    }}
                  ></div>
                </Col>
                <Col md="7">
                  <br />
                  <h3>
                    Palmares
                  </h3>
                  <p>Eerste triatlon: 1/4 Izegem in 2013. 2014 - 2015 redelijk wat wedstrijden afgewerkt, maar de meest opmerkelijke resultaten:</p>
                  <ul>
                    <li>2016</li>
                    <ul>
                      <li>Ironman 70.3 Luxemburg: 4u12, 2e M18-24, 18e overall, 8e halve marathontijd 1u18</li>
                      <li>Bouwpunttriatlon Eeklo: 1u57, 7e, 2e looptijd overall. </li>
                      <li>Ironman 70.3 WC Mooloolaba AUS: 4u29</li>
                      <li>Trail de Bruxelles 21km: Eerste overall</li>
                      <li>Trail des terrils Charleroi: Tweede overall</li>
                    </ul>

                    <li>2017</li>
                    <ul>
                      <li>10 Miles Antwerp: 55'50</li>
                      <li>1/4 Geel: 1u52'</li>
                      <li>Triatlon van Vlaanderen Oudenaarde: 8e</li>
                      <li>Alpe D'huez LD: 6u50 - 33e</li>
                      <li>SwissPeaks trail 33km, 2000D+: 13e</li>
                      <li>Houffaraid (Run - MTB - Kayak - run - kayak - MTB): Tweede overall</li>
                    </ul>

                    <li>2018</li>
                    <ul>
                      <li>Run - bike - run Gullegem: 4e</li>
                      <li>Trail du Grand Ballon 50k: 4e</li>
                      <li>Ironman Maastricht: 9u30'03": 23e overall, 4e M25-29, Kona qualified</li>
                      <li>Matterhorn Ultraks 50k, 3700D+</li>
                    </ul>

                    <li>2019</li>
                    <ul>
                      <li>Trail de la Hulle 25k: Derde overall</li>
                      <li>Les Boucles Ardennaises, 42km 1800D+: Eerste overall</li>
                      <li>La chouffe trail 68k, 2200 D+: Tweede overal</li>
                      <li>Inferno Triatlon Mürren Zwitserland (3,2 swim - 98 roadbike 2200 D+ - 30 MTB 1100 D+ - 25 run 2200 D+): 18e: 10u29</li>
                    </ul>
                  </ul>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
    </LandingPage>
  )
}
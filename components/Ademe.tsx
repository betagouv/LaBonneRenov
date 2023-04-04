import { Col, Link, Row } from '@dataesr/react-dsfr';
import React from 'react';
import { Content, DesktopSubTitle, MobileSubTitle } from './PacHome.styles';

const Ademe = () => (
  <>
    <DesktopSubTitle>À propos</DesktopSubTitle>
    <MobileSubTitle>À propos</MobileSubTitle>
    <Row gutters>
      <Col className="fr-col-12 fr-col-lg-6">
        <Content>
          <img src="/images/ademe-logo.svg" alt="ADEME" width={150} />
          <div>
            <h4>L’Agence de la transition écologique</h4>
            La Bonne Rénov’ est un <b>service public gratuit</b> proposé par l’
            <b>Agence pour la Transition Écologique (ADEME)</b>. Notre mission :
            aider les propriétaires de maisons individuelles à construire un
            projet de rénovation énergétique performante.
            <br />
            <br />
            <Link href="https://www.ademe.fr/" target="_blank" isSimple>
              Site de l’ADEME
            </Link>
          </div>
        </Content>
      </Col>
      <Col className="fr-col-12 fr-col-lg-6">
        <Content>
          <img
            src="/images/france-rennov.svg"
            alt="France rénnov"
            width={187}
          />
          <div>
            <h4>Le réseau France Rénov’</h4>
            Les conseillers du service public France Rénov&lsquo; vous
            accompagnent gratuitement sur l’ensemble du territoire.
            <br />
            <br />
            <Link href="https://france-renov.gouv.fr/" target="_blank" isSimple>
              Site France Rénov&lsquo;
            </Link>
          </div>
        </Content>
      </Col>
    </Row>
  </>
);

export default Ademe;

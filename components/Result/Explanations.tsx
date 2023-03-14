import { Icon, Tab, Tabs } from '@dataesr/react-dsfr';
import React from 'react';
import QuestionId from '../../types/enum/QuestionId';
import Slice from '../Slice';
import Explanation from './Explanation';

const Explanations = () => (
  <Slice>
    <h2>Pourquoi ce résultat ?</h2>
    Pour que l’installation d’une pompe à chaleur soit vraiment efficace, il est
    important de prendre en compte l’ensemble de votre maison. Vous trouverez
    ci-dessous une liste de points d’attention et de bonnes question à vous
    poser dans votre situation
    <Tabs className="fr-mt-4w">
      <Tab
        label={
          <>
            <Icon name="ri-alert-line" color="#CE0500" />
            Sol
          </>
        }
      >
        <Explanation
          values={{
            title: 'Sol',
            icon: '/images/sol_icon.svg',
            tips: (
              <>
                Une mauvaise isolation des murs peut représenter{' '}
                <b>jusqu’à 25% des déperdition de chaleur d’un logement.</b>
              </>
            ),
            dependencies: [QuestionId.PLANCHER_BAS_ISOLE],
            attentions: (
              <ul>
                <li>
                  Dans une maison mal isolée, l’investissement initial sur
                  l’installation de la pompe à chaleur peut-être plus élevé. Il
                  est parfois nécessaire de sur-dimensionner l’équipement par
                  rapport aux besoins d’un même logement correctement isolé.
                </li>
                <li>
                  Si les fuites de chaleur sont trop importantes, votre pompe à
                  chaleur devra fonctionner à haut régime pour atteindre
                  difficilement la consigne de température voulue. Il y a un
                  risque de sur-consommation et/ou de vieillissement prématuré
                  de votre équipement.
                </li>
              </ul>
            ),
            further: 'En savoir plus sur l’isolation des planchers bas',
            furtherLinks: [
              'https://france-renov.gouv.fr/renovation/isolation/sous-sol-garage',
            ],
          }}
        />
      </Tab>
    </Tabs>
  </Slice>
);

export default Explanations;

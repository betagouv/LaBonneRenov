import { Icon, Tab, Tabs } from '@dataesr/react-dsfr';
import React from 'react';
import { Result } from '../../types/result';
import Slice from '../Slice';
import Explanation from './Explanation';

const Explanations = ({ result }: { result: Result }) => (
  <Slice>
    <h2>Pourquoi ce résultat ?</h2>
    <div className="fr-text--lead">
      <b>
        Pour que l’installation d’une pompe à chaleur soit vraiment efficace, il
        est important de prendre en compte l’ensemble de votre maison.
      </b>
    </div>
    <Tabs className="fr-mt-4w">
      {result.explanations.map((explanation) => (
        <Tab
          key={explanation.title}
          label={
            <>
              {explanation.status === 'nok' && (
                <Icon name="ri-alert-line" color="#CE0500" />
              )}
              {explanation.title}
            </>
          }
        >
          <Explanation explanation={explanation} />
        </Tab>
      ))}
    </Tabs>
  </Slice>
);

export default Explanations;

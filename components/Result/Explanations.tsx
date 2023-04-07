import React from 'react';
import { Alert, Icon, Tab, Tabs } from '@dataesr/react-dsfr';
import { Result } from '../../types/result';
import Slice from '../Slice';
import Explanation from './Explanation';

const Explanations = ({ result }: { result: Result }) => (
  <Slice>
    {result.tooHigh && (
      <Alert
        className="fr-mb-3w"
        type="warning"
        title="Votre situation géographique est potentiellement incompatible avec l'installation d'une pompe à chaleur air/eau."
        description="D'autres systèmes de chauffage peuvent être envisagés."
      />
    )}
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
              {explanation.status === 'ok' ? (
                <Icon
                  name="ri-error-warning-line"
                  color="var(--blue-france-sun-113-625)"
                />
              ) : (
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

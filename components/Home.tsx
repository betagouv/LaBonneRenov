import {
  Alert,
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardImage,
  CardTitle,
  Radio,
  RadioGroup,
} from '@dataesr/react-dsfr';
import React, { FormEvent, useState } from 'react';
import agent from '../frontend/services/agent';
import Color from '../types/enum/Color';
import { Title } from './Home.styles';
import Slice from './Slice';

function Home() {
  const [sondage, setSondage] = useState('');
  const [sondageSent, setSondageSent] = useState(false);
  const submitSondage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    agent.Sondage.post(sondage).then(() => {
      setSondageSent(true);
    });
  };

  return (
    <>
      <Slice color={Color.BLUE}>
        <Title>La bonne rénov&lsquo;</Title>
        <h4>
          Vous aider à mesurer l’impact des travaux de rénovation énergétique.
        </h4>
        <div>
          Court laïus sur la promesse du site et de pourquoi qu’il existe. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </Slice>
      <Slice>
        <h2>Les simulateurs</h2>
        <h3>Est-ce qu’une pompe à chaleur est adaptée à ma maison ?</h3>
        <Card href="/pac" isHorizontal>
          <CardHeader>
            <CardImage alt="pac" src="/images/pac.jpg" />
          </CardHeader>
          <CardTitle>Simulateur pompe à chaleur</CardTitle>
          <CardDescription>
            Vous êtes propriétaire d’une maison et souhaitez vérifier qu’une
            pompe à chaleur est bien adaptée à votre maison
          </CardDescription>
        </Card>
      </Slice>
      <Slice>
        <h2>Sondage</h2>
        <p>
          Nous souhaitons mettre en place de nouveaux simulateurs prochainement,
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore aliqua.
        </p>
        {sondageSent ? (
          <Alert type="success" title="Merci pour votre contribution !" />
        ) : (
          <form onSubmit={submitSondage}>
            <h3>
              Quel serait le prochain simulateur dont vous auriez le plus besoin
              ?
            </h3>
            {/* @ts-ignore: Missing in dsfr */}
            <RadioGroup name="sondage" onChange={setSondage} required>
              <Radio
                label="Comment bien isoler mon logement ?"
                value="isolation"
              />
              <Radio
                label="Quelles menuiseries adaptées pour mon logement ?"
                value="menuiseries"
              />
              <Radio label="Quel est le montant des aides ?" value="aides" />
            </RadioGroup>
            <Button secondary submit>
              Soumettre mon choix
            </Button>
          </form>
        )}
      </Slice>
    </>
  );
}

export default Home;

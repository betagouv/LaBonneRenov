import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  SearchableSelect,
  TextInput,
} from '@dataesr/react-dsfr';
import React, { useEffect, useRef, useState } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import agent from '../frontend/services/agent';
import { DPEResponse } from '../types/dpe';

const Container = styled.div`
  margin: auto;
  padding: 32px;
  max-width: 1200px;
`;

const Form = styled.div`
  display: flex;
  gap: 0 32px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  > div {
    width: 100%;
    @media (min-width: 768px) {
      width: calc(50% - 16px);
    }
    min-width: 300px;
    input {
      width: 100%;
      margin-top: 4px;
    }
  }
`;
const Result = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  div {
    width: 100% !important;
    @media (min-width: 768px) {
      width: calc(50% - 16px) !important;
    }
    min-width: 300px;
  }
`;

function DPE() {
  const lastFetchDPE = useRef('');
  const lastFetchAdress = useRef('');
  const [dpes, setDpes] = useState<DPEResponse>();
  const [distance, setDistance] = useState(10000);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [address, setAddress] = useState('');
  const [selectedAddress, setSelectedAddress] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedAddress && distance) {
      const key =
        selectedAddress.geometry.coordinates[0] +
        selectedAddress.geometry.coordinates[1] +
        distance;

      if (lastFetchDPE.current !== key) {
        setLoading(true);
        lastFetchDPE.current = key;
        agent.DPE.get(
          selectedAddress.geometry.coordinates[0],
          selectedAddress.geometry.coordinates[1],
          distance
        ).then((result) => {
          if (lastFetchDPE.current === key) {
            setDpes(result);
            setLoading(false);
          }
        });
      }
    }
  }, [selectedAddress, distance]);

  useEffect(() => {
    if (address.length > 3) {
      lastFetchAdress.current = address;
      fetch(
        `https://api-adresse.data.gouv.fr/search?limit=5&autocomplete=1&q=${encodeURI(
          address
        )}`
      )
        .then((response) => response.json())
        .then((response) => {
          if (lastFetchAdress.current === address) {
            setAddresses(response.features);
          }
        });
    } else {
      setAddresses([]);
    }
  }, [address]);

  return (
    <Container>
      <h1>
        Quelle est la performance énergétique des maisons autour de vous ?
      </h1>
      <h2>
        Entrer une adresse pour retrouver les diagnostiques de performance
        énergétique (DPE) des maisons à proximité.{' '}
      </h2>
      <Form>
        <SearchableSelect
          selected={selectedAddress ? selectedAddress.properties.label : ''}
          label="Votre adresse :"
          options={addresses.map((x) => ({
            label: x.properties.label,
            value: x.properties.label,
          }))}
          filter={(x) => x}
          onTextChange={setAddress}
          onChange={(x) =>
            setSelectedAddress(addresses.find((a) => a.properties.label === x))
          }
        />
        <TextInput
          label="Distance autour de chez vous (en m) :"
          type="number"
          value={distance}
          onChange={(e) => setDistance(Number.parseInt(e.target.value, 10))}
          step={1}
        />
      </Form>
      {loading && <h2>Chargement des résultats en cours</h2>}
      {!loading && dpes && (
        <>
          <h2>La répartition des note DPE en % autour de l’adresse entrée</h2>
          <Result>
            <div>
              <Bar
                options={{
                  indexAxis: 'y',
                }}
                data={{
                  labels: Object.keys(dpes.dpeEnergie),
                  datasets: [
                    {
                      label: 'DPE Energie',
                      data: Object.values(dpes.dpeEnergie),
                      backgroundColor: [
                        '#056303',
                        '#09760a',
                        '#6eab04',
                        '#FFFF00',
                        '#ff7204',
                        '#ff3e03',
                        '#FF0000',
                        '#999999',
                      ],
                    },
                  ],
                }}
              />
            </div>
            <div>
              <Bar
                options={{
                  indexAxis: 'y',
                }}
                data={{
                  labels: Object.keys(dpes.dpeGES),
                  datasets: [
                    {
                      label: 'DPE GES',
                      data: Object.values(dpes.dpeGES),
                      backgroundColor: [
                        '#056303',
                        '#09760a',
                        '#6eab04',
                        '#FFFF00',
                        '#ff7204',
                        '#ff3e03',
                        '#FF0000',
                        '#999999',
                      ],
                    },
                  ],
                }}
              />
            </div>
          </Result>
        </>
      )}
      <Accordion className="fr-mt-4w">
        <AccordionItem title="Qu’est-ce que le Diagnostique de performance énergétique (DPE) ?">
          Le diagnostic de performance énergétique (DPE) renseigne sur la
          performance énergétique et climatique d’un logement ou d’un bâtiment
          (étiquettes A à G), en évaluant sa consommation d’énergie et son
          impact en terme d’émissions de gaz à effet de serre. Il s’inscrit dans
          le cadre de la politique énergétique définie au niveau européen afin
          de réduire la consommation d’énergie des bâtiments et de limiter les
          émissions de gaz à effet de serre.
          <br />
          Un logement classé A est considéré comme très performant tandis qu’un
          logement classé F ou G sera classé comme une passoires thermique.
          <br />
          Le DPE doit être effectué à linitiative du propriétaire qui loue ou
          vend son logement. Il doit être réalisé par un professionnel certifié.
          La durée de validité du DPE est de 10 ans.
        </AccordionItem>
        <AccordionItem title="A quoi sert le Diagnostique de performance énergétique (DPE) ?">
          L’objectif du DPE est d’informer les occupants, les futurs acquéreurs
          ou locataires des caractéristiques d’un bien immobilier. Il permet
          notamment d’identifier les logements énergivores. En pratique, plus la
          note DPE est basse, plus les risques d’inconfort et de factures
          énergertiques élevé sont important.
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default DPE;

import styled from 'styled-components';
import { SearchableSelect, TextInput } from '@dataesr/react-dsfr';
import React, { useEffect, useRef, useState } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import agent from '../frontend/services/agent';
import { DPEResponse } from '../types/dpe';

const Container = styled.div`
  margin: 32px;
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
          <h2>
            Perfomance énergétique des {dpes.count} batiment autour de chez vous
          </h2>
          <Result>
            <div>
              <Bar
                data={{
                  labels: Object.keys(dpes.dpeEnergie),
                  datasets: [
                    {
                      label: 'DPE Energie',
                      data: Object.values(dpes.dpeEnergie),
                      backgroundColor: [
                        '#329A33',
                        '#34CC33',
                        '#34CC33',
                        '#FFFF00',
                        '#FFCC01',
                        '#FF9A32',
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
                data={{
                  labels: Object.keys(dpes.dpeGES),
                  datasets: [
                    {
                      label: 'DPE GES',
                      data: Object.values(dpes.dpeGES),
                      backgroundColor: [
                        '#329A33',
                        '#34CC33',
                        '#34CC33',
                        '#FFFF00',
                        '#FFCC01',
                        '#FF9A32',
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
    </Container>
  );
}

export default DPE;

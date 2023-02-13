import { ChartData } from 'chart.js';
import 'chart.js/auto';
import { Line, Pie } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import Color from '../../types/enum/Color';
import Slice from '../Slice';
import agent from '../../frontend/services/agent';
import { Stat, Stats } from './index.styles';

function Statistics() {
  const [action, setAction] = useState<ChartData<'line', number[], unknown>>();
  const [visit, setVisit] = useState<ChartData<'line', number[], unknown>>();
  const [sondage, setSondage] = useState<ChartData<'pie', number[], unknown>>();
  const [questionnaire, setQuestionnaire] =
    useState<ChartData<'pie', number[], unknown>>();

  useEffect(() => {
    agent.Statistics.visit().then((visits) => {
      setVisit({
        labels: Object.keys(visits),
        datasets: [
          {
            label: '# de visites',
            data: Object.values(visits),
            borderWidth: 1,
          },
        ],
      });
    });
  }, []);

  useEffect(() => {
    agent.Statistics.action().then((actions) => {
      setAction({
        labels: Object.keys(actions),
        datasets: [
          {
            label: '# de clique sur france rennov',
            data: Object.values(actions),
            borderWidth: 1,
          },
        ],
      });
    });
  }, []);

  useEffect(() => {
    agent.Statistics.sondage().then((stats) => {
      setSondage({
        labels: Object.keys(stats),
        datasets: [
          { label: '# de votes', data: Object.values(stats), borderWidth: 1 },
        ],
      });
    });
  }, []);

  useEffect(() => {
    agent.Statistics.questionnaire().then((stats) => {
      setQuestionnaire({
        labels: Object.keys(stats),
        datasets: [
          { label: 'Question', data: Object.values(stats), borderWidth: 1 },
        ],
      });
    });
  }, []);

  return (
    <Slice color={Color.GRAY}>
      <h1>Nos Statistiques</h1>
      <Stats>
        <Stat>
          <h2>Visites</h2>
          {visit ? <Line data={visit} /> : 'Chargement en cours'}
        </Stat>
        <Stat>
          <h2>France Rénnov</h2>
          {action ? <Line data={action} /> : 'Chargement en cours'}
        </Stat>
        <Stat>
          <h2>Questionnaire</h2>
          {questionnaire ? <Pie data={questionnaire} /> : 'Chargement en cours'}
        </Stat>
        <Stat>
          <h2>Sondage</h2>
          {sondage ? <Pie data={sondage} /> : 'Chargement en cours'}
        </Stat>
      </Stats>
    </Slice>
  );
}

export default Statistics;

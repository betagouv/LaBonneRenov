import { Icon, Link } from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../frontend/stores';
import Color from '../../types/enum/Color';
import QuestionId from '../../types/enum/QuestionId';
import { Explanation as ExplanationType } from '../../types/result';
import { getRecap } from '../Recap';
import Slice from '../Slice';
import {
  Container,
  Title,
  SubTitle,
  RedSubTitle,
  Answer,
} from './Explanation.styles';

const Explanation = ({ explanation }: { explanation: ExplanationType }) => {
  const { currentAnswers } = useStore();
  return (
    <Container>
      <div>
        <Title>
          <img src={explanation.image} alt="" />
          <h3>{explanation.title}</h3>
        </Title>
      </div>
      <div>
        <SubTitle>
          <Icon name="ri-information-line" size="lg" />
          <h5>Le saviez-vous ?</h5>
        </SubTitle>
        {explanation.tips}
      </div>
      <div>
        <Slice color={Color.BLUE} padding={16}>
          {explanation.dependencies.map((dependency: QuestionId) => {
            const answer = currentAnswers.find((a) => a.id === dependency);
            if (answer && answer.value !== undefined) {
              return (
                <Answer key={dependency}>
                  <span>
                    {getRecap(
                      currentAnswers,
                      dependency,
                      answer.value,
                      () => {},
                      true
                    )}
                  </span>
                  <Link
                    href={`/pac/${dependency}`}
                    isSimple
                    icon="ri-edit-line"
                    iconPosition="left"
                  >
                    Modifier
                  </Link>
                </Answer>
              );
            }
            return null;
          })}
        </Slice>
      </div>
      <div>
        <RedSubTitle>
          <Icon name="ri-alert-line" size="lg" />
          <h5>Points d&lsquo;attention</h5>
        </RedSubTitle>
        {explanation.attentions}
      </div>
      {explanation.further && explanation.furtherLinks && (
        <div>
          <SubTitle>
            <h5>{explanation.further}</h5>
          </SubTitle>
          {explanation.furtherLinks.map((link: string) => (
            <Link key={link} href={link} isSimple target="_blank">
              {link}
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
};

export default observer(Explanation);

import { Icon, Link } from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../frontend/stores';
import Color from '../../types/enum/Color';
import QuestionId from '../../types/enum/QuestionId';
import { getRecap } from '../Recap';
import Slice from '../Slice';
import {
  Container,
  Title,
  SubTitle,
  RedSubTitle,
  Answer,
} from './Explanation.styles';

const Explanation = ({ values }: { values: any }) => {
  const { currentAnswers } = useStore();
  return (
    <Container>
      <div>
        <Title>
          <img src={values.icon} alt="" />
          <h3>{values.title}</h3>
        </Title>
      </div>
      <div>
        <SubTitle>
          <Icon name="ri-information-line" size="lg" />
          <h5>Le saviez-vous ?</h5>
        </SubTitle>
        {values.tips}
      </div>
      <div>
        <Slice color={Color.BLUE} padding={16}>
          {values.dependencies.map((dependency: QuestionId) => {
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
        {values.attentions}
      </div>
      <div>
        <SubTitle>
          <h5>{values.further}</h5>
        </SubTitle>
        {values.furtherLinks.map((link: string) => (
          <Link key={link} href={link} isSimple target="_blank">
            {link}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default observer(Explanation);

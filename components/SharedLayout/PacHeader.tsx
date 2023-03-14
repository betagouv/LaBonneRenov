import { Breadcrumb, BreadcrumbItem, Button } from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useStore } from '../../frontend/stores';
import { Header } from './PacHeader.styles';

function PacHeader({ resume }: { resume?: boolean }) {
  const router = useRouter();
  const { currentAnswers, reset } = useStore();

  return (
    <Header>
      <Breadcrumb>
        <BreadcrumbItem asLink={<Link href="/pac" />}>Accueil</BreadcrumbItem>
        <BreadcrumbItem>
          Vérifier qu’une pompe à chaleur est adaptée à votre maison
        </BreadcrumbItem>
      </Breadcrumb>
      {currentAnswers.length > 0 && (
        <Button
          secondary
          size="sm"
          onClick={() => {
            if (resume) {
              router.push('/pac/simulateur');
            } else {
              reset(router);
            }
          }}
          icon="ri-arrow-go-forward-line"
        >
          {resume ? 'Reprendre votre simulation' : 'Recommencer la simulation'}
        </Button>
      )}
    </Header>
  );
}

PacHeader.defaultProps = {
  resume: false,
};

export default observer(PacHeader);

import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MainForm from '../../components/MainForm';
import { useStore } from '../../frontend/stores';

function Pac() {
  const router = useRouter();
  const { setCurrentQuestion } = useStore();

  useEffect(() => {
    setCurrentQuestion(router.query.id as string);
  }, [router.query.id, setCurrentQuestion]);

  return <MainForm />;
}

export default observer(Pac);

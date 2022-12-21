import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStore } from '../../frontend/stores';

function Pac() {
  const router = useRouter();
  const { loading, updateQuestion } = useStore();

  useEffect(() => {
    if (!loading) {
      updateQuestion(router);
    }
  }, [loading, updateQuestion, router]);
  return null;
}

export default observer(Pac);

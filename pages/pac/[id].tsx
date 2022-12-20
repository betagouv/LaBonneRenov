import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MainForm from '../../components/MainForm';
import { useStore } from '../../frontend/stores';

export default function Pac() {
  const router = useRouter();
  const { currentQuestion, setCurrentQuestion } = useStore();

  useEffect(() => {
    if (!currentQuestion || router.query.id !== currentQuestion.id) {
      setCurrentQuestion(router.query.id as string);
    }
  }, [router.query.id, currentQuestion, setCurrentQuestion]);

  return <MainForm />;
}

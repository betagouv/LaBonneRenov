import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStore } from '../../frontend/stores';

export default function Pac() {
  const router = useRouter();
  const { currentQuestion } = useStore();

  useEffect(() => {
    if (currentQuestion) {
      router.push(`/pac/${currentQuestion.id}`);
    }
  }, [currentQuestion, router]);
  return null;
}

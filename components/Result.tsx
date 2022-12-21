import { Result as ResultType } from '../types/result';

function Result({ result }: { result: ResultType }) {
  return result.compatibility;
}

export default Result;

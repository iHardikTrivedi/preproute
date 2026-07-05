import { useParams } from "react-router-dom";

interface QuestionsPageProps {
  testId?: string;
}

const QuestionsPage = ({ testId: propTestId }: QuestionsPageProps) => {
  // Use prop if provided, otherwise fall back to URL param
  const params = useParams<{ testId: string }>();
  const testId = propTestId || params.testId;

  return <div>Questions Page - Test ID: {testId}</div>;
};

export default QuestionsPage;

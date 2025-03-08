interface FeedbackProps {
  feedback: string;
  author: string;
}

 function FeedbackCard({ feedback, author }: FeedbackProps) {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-md">
      <p className="text-gray-700">"{feedback}"</p>
      <p className="text-sm text-gray-500 mt-2">- {author}</p>
    </div>
  );
}
export default FeedbackCard;
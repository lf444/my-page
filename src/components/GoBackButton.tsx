import { useNavigate } from "react-router-dom";

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <p>
      <button
        className=" p-4 bg-black color mt-4 ml-4 text-white	 rounded"
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Retour
      </button>
    </p>
  );
}

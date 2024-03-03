import { useNavigate } from "react-router-dom";

export default function GoHomeButton() {
  const navigate = useNavigate();

  return (
    <p>
      <button
        className=" p-4 bg-black color mt-4 ml-4 text-white	 rounded"
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Retour
      </button>
    </p>
  );
}

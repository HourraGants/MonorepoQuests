import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
}

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error("Erreur lors du fetch : ", err));
  }, []);

  return (
    <>
      <h1>Liste des séries :</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Programs;

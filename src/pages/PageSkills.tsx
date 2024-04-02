import { useState, useEffect } from "react";
import axios from "axios";
import { ISkill } from "../interfaces";

const skillsUrl = "http://localhost:3968";
export const PageSkills = () => {
  const [skills, setSkills] = useState<{ [key: string]: ISkill }>({});

  useEffect(() => {
    (async () => {
      const response = (
        await axios.get<{ [key: string]: ISkill }>(`${skillsUrl}/skills`)
      ).data;
      setSkills(response);
    })();
  }, []);

  return (
    <div className="pageSkills">
      <p>This is the Skills page.</p>
      <div className="skills">
        {Object.keys(skills).map((idCode) => (
          <div className="skill" key={idCode}>
            <p className="skillName">{skills[idCode].name}</p>
            <p className="description">{skills[idCode].description}</p>
            <p className="skillUrl">
              <a href={skills[idCode].url} target="_blank">
                {skills[idCode].url}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

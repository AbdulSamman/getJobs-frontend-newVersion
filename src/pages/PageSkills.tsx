import { useState, useEffect } from "react";
import axios from "axios";
import { ISkill } from "../interfaces";

const skillsUrl = "http://localhost:3668";
export const PageSkills = () => {
  const [skills, setSkills] = useState<{ [key: string]: ISkill }>({});

  useEffect(() => {
    (async () => {
      const response = (
        await axios.get<{ [key: string]: ISkill }>(`${skillsUrl}/skills`)
      ).data;
      setSkills(response);
    })();
  });

  return (
    <div className="pageSkills">
      <p>This is the Skills page.</p>
      <div className="skills">
        {Object.keys(skills).map((skillKey) => (
          <div className="skill">
            <p className="skillName">{skills[skillKey]?.name}</p>
            <p className="description">{skills[skillKey].description}</p>
            <p className="skillUrl">
              <a href={skills[skillKey].url} target="_blank">
                {skills[skillKey].url}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

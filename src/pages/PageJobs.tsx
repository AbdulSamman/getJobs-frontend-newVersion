import { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/pageJobs.scss";
export const PageJobs = () => {
  const { jobs } = useContext(AppContext);

  return (
    <div className="pageJobs">
      <p>There are {jobs.length} jobs:</p>

      <div className="jobs">
        {jobs.map((job) => {
          return (
            <div className="job" key={job.id}>
              <div className="title">
                <a href={job.url} target="_blank">
                  {job.title}
                </a>
              </div>
              <div className="company">{job.company}</div>
              <div className="description">{job.description}</div>
              <div className="skillList">{job.skillList}</div>
              <div className="publicationDate">{job.publicationDate}</div>
              <div className="skills">
                {job.skills.map((skill, i) => {
                  return (
                    <div key={i}>
                      {skill.name ? (
                        <div className="found">
                          <div className="name">
                            <a href={skill.url} target="_blank">
                              {skill.name}
                            </a>{" "}
                            - {skill.description}
                          </div>
                        </div>
                      ) : (
                        <div className="missing">
                          <div className="name">
                            <a
                              href={`https://www.google.com/search?q=${skill.idCode}+web+development`}
                              target="_blank">
                              {skill.idCode}
                            </a>{" "}
                            - ADD TO BACKEND: /src/data/skillInfo.json
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

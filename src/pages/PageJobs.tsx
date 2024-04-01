import { useState, useEffect } from "react";
import { IJob } from "../interfaces";
import axios from "axios";

const backendUrl = "http://localhost:3668";

export const PageJobs = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);

  useEffect(() => {
    (async () => {
      const response = (await axios.get<IJob[]>(`${backendUrl}/jobs`)).data;
      const _jobs: IJob[] = response.sort((a, b) => {
        const dateA = new Date(a.publicationDate);
        const dateB = new Date(b.publicationDate);
        return dateB.getTime() - dateA.getTime();
      });
      setJobs(_jobs);
    })();
  });
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
              <div className="skills">{job.skillList}</div>
              <div className="publicationDate">{job.publicationDate}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';

const WorkExperience = ({ jobs, title }) => (
  <>
    <h3 className="col">{title}</h3>
    {jobs.map(({
      jobTitle, enterprise, startDate, endDate, description, technologies,
    }) => (
      <div className="col-12 py-2 job">
        <h4 className="d-block">{jobTitle}</h4>
        <strong className="d-block">
          {startDate && <span className="pr-1">{startDate}</span>}
          {(startDate && endDate) && <span>-</span>}
          {endDate && <span className="px-2">{endDate}</span>}
          <h5 className="d-inline-block">{enterprise}</h5>
        </strong>
        <em className="d-block">{description}</em>
        {technologies.map((tech) => <div className="d-inline-block py-1 px-2 m-1 bg-secondary rounded">{tech}</div>)}
      </div>
    ))}
  </>
);
export default WorkExperience;

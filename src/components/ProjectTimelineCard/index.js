// Write your code here
import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {project} = props
  const {projectTitle, imageUrl, duration, description, projectUrl} = project
  return (
    <div>
      <img src={imageUrl} alt="project" className="img-p" />
      <div className="pr-card">
        <h1 className="head-pr">{projectTitle}</h1>
        <div className="c-c-pr">
          <AiFillCalendar className="calendar " />
          <p className="l-par-pr">{duration}</p>
        </div>
      </div>
      <p className="project-para">{description}</p>
      <a href={projectUrl} target="_click" className="a">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard

// Write your code here
import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {course} = props
  const {courseTitle, description, tagsList, duration} = course
  return (
    <div className="bg-course">
      <div className="course-card-1">
        <h1 className="c-head">{courseTitle}</h1>
        <div className="c-c-pr">
          <AiFillClockCircle className="clock" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="course-para">{description}</p>
      <div className="btn">
        {tagsList.map(e => (
          <p className="btn-ele" key={e.id}>
            {e.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard

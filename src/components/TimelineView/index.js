// Write your code here
import {Component} from 'react'

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    const courseDetails = timelineItemsList.filter(
      e => e.categoryId === 'COURSE',
    )
    const projectDetails = timelineItemsList.filter(
      e => e.categoryId === 'PROJECT',
    )
    return (
      <div className="bg-container">
        <h1 className="head-1">
          My Journey OF <br /> <br />
          <span className="head-2">CCBP 4.0</span>
        </h1>
        <div className="chron-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            theme={{
              primary: '#0967d2',
              secondary: 'white',
              cardBgColor: 'white',
              cardForeColor: '#1e293b',
              titleColor: '#0967d2',
            }}
          >
            {courseDetails.map(e => (
              <CourseTimelineCard key={e.id} course={e} />
            ))}

            {projectDetails.map(e => (
              <ProjectTimelineCard key={e.id} project={e} />
            ))}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView

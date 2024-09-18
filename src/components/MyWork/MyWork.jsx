import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
function MyWork() {
  return (
    <div id="portfolio" className='mywork'>
        <div className="mywork-title">
            <h1>My Lastest Work</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="mywork-para">
          <p>Check Out Github Repo: <a href="https://github.com/Anushka040604/" target="_blank" rel="noopener noreferrer">https://github.com/Anushka040604/</a></p>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
              return <img key={index} src={work.w_img} style={{ width: '300px', height: '230px', borderRadius: '20px' }} alt=""/>
            })}
        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt=""/>
        </div>
    </div>
  )
}

export default MyWork
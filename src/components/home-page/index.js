import React from 'react';
import { Link } from 'react-router-dom';
import './_home-style.scss';

const HomePage = () => {
  return ( 
    <section className='home-page'>
      <section className='welcome'>
        <div>
          <p>I have been working as a psychologist since 1984 in my office near the <a href="http://www.pikeplacemarket.org/">Pike Place Market</a>. I enjoy working with couples and individuals. I’ve been married thirty years and am a grateful mom, stepmom and grandmother.</p>
        </div>
        <div>
          <p>I see individuals and couples about:</p>
            <ul>
              <li>Attachment and commitment</li>
              <li>Depression</li>
              <li>Partnership</li>
              <li>Communication</li>
              <li>Loneliness</li>
              <li>Sexuality</li>
              <li>Power Struggles</li>
              <li>Financial agreements</li>
              <li>Boundaries</li>
              <li>Contentment</li>
            </ul>
        </div>
        <div>
          <p>The process of <a href="http://www.susanrc.com/find%20a%20couples%20counselor">finding a therapist</a> often requires tenacity. The good “match”, timing, and philosophy all need to line up correctly.  However, the search is worth the effort when something as important as your primary relationship—or your personal well-being—is at stake.</p> 
        </div>
      </section>

      <section className='about'>
        <div>
          I’ve been a Seattle psychologist in private practice since 1984. 
          I see individuals and couples (spouses and partners, parents and adult children, coworkers and teammates). 
          I have been trained in <a href="http://www.susanrc.com/what-is-etf/">Emotionally Focused Therapy</a>. 
          More about me is available <Link to='/about'>here</Link>.</div>
        <div>
          I am a Certified Emotionally Focused Therapist. 
          This means I have submitted videos of my work with couples to the International Centre for Excellence 
          in Emotionally Focused Therapy—as well as having documented my qualifications for this work.
        </div>
        <div>
          <p>Love what you do,</p>
          <p>Love who you do it for,</p>
          <p>Love you who do it with.</p>
        </div>
      </section>
    </section>
  )
}

export default HomePage;

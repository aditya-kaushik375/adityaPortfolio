import {Link} from 'react-router-dom'
import './index.css'

const skillsData = [
  {
    id: 1,
    title: 'React-JS',
    imgsrc:
      'https://cdn-icons-png.flaticon.com/512/1126/1126012.png?w=740&t=st=1686844857~exp=1686845457~hmac=86f540778afb9eef9c4665303401a2c340cdaf05ca193a45109a944442bffad5',
  },
  {
    id: 2,
    title: 'Node-JS',
    imgsrc:
      'https://cdn-icons-png.flaticon.com/512/919/919825.png?w=740&t=st=1686844933~exp=1686845533~hmac=366971bea53651946dd3a76014145dde9b300808ee31a97f90171a70a56cc661',
  },
  {
    id: 3,
    title: 'JavaScript',
    imgsrc:
      'https://cdn-icons-png.flaticon.com/512/919/919828.png?w=740&t=st=1686844996~exp=1686845596~hmac=fe283736957771dc943be502b629e7036a4ff4c0f30114a1d7904eab0310ab45',
  },
  {
    id: 4,
    title: 'SQL',
    imgsrc:
      'https://cdn-icons-png.flaticon.com/512/957/957522.png?w=740&t=st=1686845071~exp=1686845671~hmac=b9a9378d00e2f24aee1cb9c6ef90a877eb7412d1ebab6d21886e753e86233dc8',
  },
  {
    id: 5,
    title: 'HTML',
    imgsrc:
      'https://cdn-icons-png.flaticon.com/512/919/919827.png?w=740&t=st=1686845123~exp=1686845723~hmac=0de9eccfb78111021afef9f745e54e9eea4cac4fdbefc2c8e5bc89b39c4e888c',
  },
  {
    id: 6,
    title: 'CSS',
    imgsrc:
      'https://cdn-icons-png.flaticon.com/512/919/919826.png?w=740&t=st=1686845177~exp=1686845777~hmac=135f1a43cfe98f3f25724baf817ccbe9800599b0a00c28b5d84704e44d0648fe',
  },
  {
    id: 7,
    title: 'Python',
    imgsrc:
      'https://cdn-icons-png.flaticon.com/512/423/423066.png?w=740&t=st=1686845236~exp=1686845836~hmac=740c9dbeb279098d085e03e2093490bbfe3b422670854ba5328e4057684bf5a8',
  },
]

const AboutMe = () => (
  <div className="about">
    <div className="left">
      <h1>Who Am I ?</h1>
      <p>Im a Full-Stack Developer.I love to create responsive websites.</p>

      <Link to="/contact">
        <button type="button" className="btn">
          Contact
        </button>
      </Link>
    </div>
    <div className="right">
      <h1>My Skills</h1>
      <ul className="img-container">
        {skillsData.map(eachSkill => (
          <li key={eachSkill.id}>
            <div className="skill-container">
              <img className="skill-icon" src={eachSkill.imgsrc} alt="skill" />
              <p className="skill-text">{eachSkill.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
)
export default AboutMe

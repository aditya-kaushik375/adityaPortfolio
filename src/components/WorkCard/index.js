import './index.css'

const ProjectCardData = [
  {
    id: 1,
    imgsrc:
      'https://images.unsplash.com/photo-1616469829935-c2f33ebd89b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Insta Share Mini Project',
    text:
      'Implemented responsive streaming application like Instagram Clone where users can log in and see a list of stories and posts, user can also search post caption.',
    url: 'https://aditya3insta.ccbp.tech/login',
    gitsrc:
      'https://github.com/aditya-kaushik375/insta-share-mini-project/tree/master/src/components',
  },
  {
    id: 2,
    imgsrc:
      'https://img.freepik.com/free-vector/green-cricket-sports-background-with-illustration-players-golden-trophy-cup_1302-5494.jpg?w=826&t=st=1686890005~exp=1686890605~hmac=e8ee00d011afd39f13d474801dcfb3e24ecba69d6518957293ec664328a0d432',
    title: 'IPL Dashboard',
    text:
      'Implemented IPL Dashboard app where users can list of ipl team , individual team details and respective team matches info about the team overall performance.',
    url: 'https://aditya3ipl.ccbp.tech/',
    gitsrc:
      'https://github.com/aditya-kaushik375/insta-share-mini-project/tree/master/src/components',
  },
  {
    id: 3,
    imgsrc:
      'https://img.freepik.com/free-photo/wooden-cubes-plaster-magnifying-glass_176474-7070.jpg?w=900&t=st=1686890499~exp=1686891099~hmac=7f2f5d8c20c388963a4693de40dc553ba35f8e9927ef5bb37885f54ec6a92da6',
    title: 'Wikipedia Search Application',
    text:
      'Developed wikipedia search application where user can search and view results and can see detailed explanation.',
    url: 'http://adityak1wiki.ccbp.tech/',
    gitsrc:
      'https://github.com/aditya-kaushik375/insta-share-mini-project/tree/master/src/components',
  },
]

const WorkCard = () => (
  <div className="work-container">
    <h1 className="project-heading">Projects</h1>

    <ul className="project-container">
      {ProjectCardData.map(eachProject => (
        <li key={eachProject.id}>
          <div className="project-card">
            <img src={eachProject.imgsrc} alt="project" />
            <h2 className="project-title">{eachProject.title}</h2>
            <div className="pro-details">
              <p>{eachProject.text}</p>
              <div className="pro-btns">
                <a href={eachProject.url} className="btn">
                  View
                </a>
                <a href={eachProject.gitsrc} className="btn">
                  Source
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default WorkCard

import './index.css'

const Form = () => (
  <div className="form">
    <form>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" />
      <label htmlFor="mail">Your Email</label>
      <input type="email" id="mail" />
      <label htmlFor="sub">Subject</label>
      <input type="text" id="sub" />
      <label htmlFor="msg">Message</label>
      <textarea rows="6" cols="" placeholder="Type Your Message Here..." />
      <button type="submit" className="btn submit">
        Submit
      </button>
    </form>
  </div>
)

export default Form

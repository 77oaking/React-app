import "../../chats.css";
const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-dots comment"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">unread messages</span></span>
        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat</h6>
        </div>
        <div className="chat-form">
          <div className="chat-msg">
          {

            Array.from({length:20}).map((_,id)=>(

            <div key={id}>
              <p>
                <b>You Wrote:</b>
                Hello,World! This is a toast message.
              </p>
              <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                <b>Support wrote:</b>
                Hello World! This is a toast message.
              </p>

            </div>
            ))
          }
          </div>
          <textarea className="form-control" id="ClienChatMsg" placeholder="Your Text Message">
          </textarea>
          <button className="btn btn-success btn-block" type="submit">Submit</button>
        </div>
      </div>
    </>
  );
}

export default UserChatComponent;

function Message(props) {
    return (
      <div className="App">
        <footer style={{textAlign: 'center', color: 'green'}}>
          Created by {props.name}
        </footer>
      </div>
    );
  }

export default Message;
import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: true,
  };
  render() {
    return (
      <>
        <div>
          {this.state.editMode ? (
            <input value={this.props.status} />
          ) : (
            <span>{this.props.status}</span>
          )}
        </div>
      </>
    );
  }
}

export default ProfileStatus;

import React, { useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditmode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditmode(true);
  };
  const deactivateEditMode = () => {
    setEditmode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <div>
        {editMode ? (
          <div>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivateEditMode}
              value={status}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={activateEditMode}>{status}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileStatus;

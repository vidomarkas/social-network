import React from "react";

export const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "Viktoras",
        location: { country: "Lithuania", city: "Klaipeda" },
        status: "I like football",
        avatarURL:
          "https://www.flaticon.com/svg/static/icons/svg/147/147144.svg",
        followed: false,
      },
      {
        id: 2,
        fullName: "Andrew",
        location: { country: "United Kingdom", city: "London" },
        status: "React FTW!",
        avatarURL:
          "https://www.flaticon.com/svg/static/icons/svg/147/147144.svg",
        followed: false,
      },
      {
        id: 3,
        fullName: "Monica",
        location: { country: "U.S.", city: "Los Angeles" },
        status: "Life coach, ready to help",
        avatarURL: "https://www.svgrepo.com/show/16242/woman.svg",
        followed: true,
      },
      {
        id: 4,
        fullName: "Gloria",
        location: { country: "France", city: "Paris" },
        status: "Bonjour",
        avatarURL: "https://www.svgrepo.com/show/16242/woman.svg",
        followed: true,
      },
    ]);
  }

  const onFollowUser = (userId) => {
    props.followUser(userId);
  };
  const onUnfollowUser = (userId) => {
    props.unfollowUser(userId);
  };

  const showMore = () => {
    props.setUsers([
      {
        id: 1,
        fullName: "Viktoras",
        location: { country: "Lithuania", city: "Klaipeda" },
        status: "I like football",
        avatarURL:
          "https://www.flaticon.com/svg/static/icons/svg/147/147144.svg",
        followed: false,
      },
      {
        id: 2,
        fullName: "Andrew",
        location: { country: "United Kingdom", city: "London" },
        status: "React FTW!",
        avatarURL:
          "https://www.flaticon.com/svg/static/icons/svg/147/147144.svg",
        followed: false,
      },
      {
        id: 3,
        fullName: "Monica",
        location: { country: "U.S.", city: "Los Angeles" },
        status: "Life coach, ready to help",
        avatarURL: "https://www.svgrepo.com/show/16242/woman.svg",
        followed: true,
      },
      {
        id: 4,
        fullName: "Gloria",
        location: { country: "France", city: "Paris" },
        status: "Bonjour",
        avatarURL: "https://www.svgrepo.com/show/16242/woman.svg",
        followed: true,
      },
    ]);
  };
  return (
    <>
      <ul>
        {props.users.map((user) => (
          <li
            key={user.id}
            style={{
              border: "2px solid rgb(22, 88, 175)",
              marginBottom: "10px",
              display: "flex",
              padding: "10px",
            }}
          >
            <div>
              <img
                style={{ height: "40px", margin: "20px 10px" }}
                src={user.avatarURL}
                alt="avatar"
              />
              <div>
                {user.followed ? (
                  <button onClick={() => onUnfollowUser(user.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => onFollowUser(user.id)}>Follow</button>
                )}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "20px" }}>
                <p>{user.fullName}</p>
                <p>
                  {user.location.city}, {user.location.country}
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  padding: "10px",
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                  height: "40px",
                }}
              >
                <p>{user.status}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            showMore();
          }}
        >
          Show more
        </button>
      </div>
    </>
  );
};

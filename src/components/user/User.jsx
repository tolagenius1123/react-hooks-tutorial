import React, { useState } from "react";
import ProfilePic from "../../assets/lady.jpg";
import styles from "./User.module.css";

const User = () => {
  const [firstName, setFirstName] = useState("Omotola");
  const [details, setDetails] = useState({
    firstName: "Omotola",
    lastName: "Jinadu",
    email: "tolajinadu1123",
    age: 40,
    profession: "Software Engineer",
  });
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    profession: "",
  });
  console.log(userInput);
  return (
    <>
      <div className={styles.user}>
        <h1 className={styles.heading}>Your Profile</h1>
        <img className={styles.pic} src={ProfilePic} alt="profile-pic" />
        <p className={styles.details}>Firstname: {details.firstName}</p>
        <p className={styles.details}>Lastname: {details.lastName}</p>
        <p className={styles.details}>Email: {details.email}</p>
        <p className={styles.details}>Age: {details.age}</p>
        <p className={styles.details}>Profession: {details.profession}</p>
      </div>
      <form
        className={styles.form}
        onSubmit={(event) => {
          e.preventDefault();
          setDetails(userInput);
          setUserInput({
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            profession: "",
          });
        }}
      >
        <h1>Update Profile</h1>
        <div className={styles.field}>
          <label htmlFor="firstName">Firstname</label>
          <input
            type="text"
            name="firstName"
            value={userInput.firstName}
            onChange={(event) =>
              setUserInput({ ...userInput, firstName: event.target.value })
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Lastname</label>
          <input
            type="text"
            name="lastName"
            value={userInput.lastName}
            onChange={(event) =>
              setUserInput({ ...userInput, lastName: event.target.value })
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={userInput.email}
            onChange={(event) =>
              setUserInput({ ...userInput, email: event.target.value })
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Age</label>
          <input
            type="number"
            name="email"
            value={userInput.age}
            onChange={(event) =>
              setUserInput({ ...userInput, age: event.target.value })
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Profession</label>
          <input
            type="text"
            name="email"
            value={userInput.profession}
            onChange={(event) =>
              setUserInput({ ...userInput, profession: event.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default User;
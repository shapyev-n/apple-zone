import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

const EditAuth = ({ handleMouseLeave }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");

  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const [userFirstName, userLastName] = user.displayName.split(" ");
        setFirstName(
          userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1)
        );
        setLastName(
          userLastName.charAt(0).toUpperCase() + userLastName.slice(1)
        );
        setProfileImageUrl(user.photoURL);
      } else {
        return user;
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const updateUserProfile = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: `${
          firstName.charAt(0).toUpperCase() + firstName.slice(1)
        } ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`,
        photoURL: profileImageUrl,
      });
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <div id="editAuth">
      <div className="editAuth">
        <span onClick={() => handleMouseLeave()}>+</span>
        <div className="card">
          <img src={profileImageUrl} alt="" />
          <TextField
            onChange={(e) => setProfileImageUrl(e.target.value)}
            label="Profile Image URL"
            variant="standard"
            sx={{ width: "100%" }}
            value={profileImageUrl}
          />
          <TextField
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
            variant="standard"
            inputProps={{
              style: { textTransform: "capitalize" },
            }}
            sx={{ width: "100%" }}
            value={firstName}
          />
          <TextField
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            variant="standard"
            inputProps={{
              style: { textTransform: "capitalize" },
            }}
            sx={{ width: "100%" }}
            value={lastName}
          />
          <Button
            onClick={() => {
              updateUserProfile();
              handleMouseLeave();
            }}
            sx={{ width: "80%" }}
            variant="contained"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditAuth;

// import { Button, TextField } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const EditAuth = ({ handleMouseLeave }) => {
//   const { editAuth } = useAuth();
//   const [surName, setSurName] = useState("");
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");

//   const navigate = useNavigate();

//   const auth = getAuth();
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log(user.displayName);
//         const [userFirstName, userLastName] = user.displayName.split(" ");
//         setSurName(userFirstName);
//         setName(userLastName);
//         navigate("/");
//         // handleMouseLeave();

//         // You can also set the profile image URL here
//       } else {
//         // User is signed out
//         // Handle the case when the user is not authenticated
//       }
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   return (
//     <div id="editAuth">
//       <div className="editAuth">
//         <span onClick={() => handleMouseLeave()}>+</span>
//         <div className="card">
//           <img src={image} alt="" />
//           <TextField
//             onChange={(e) => setImage(e.target.value)}
//             label="URL Photo"
//             variant="standard"
//             sx={{ width: "100%" }}
//             value={image}
//           />
//           <TextField
//             onChange={(e) => setName(e.target.value)}
//             label="Name"
//             variant="standard"
//             inputProps={{
//               style: { textTransform: "capitalize" },
//             }}
//             sx={{ width: "100%" }}
//             value={name}
//           />
//           <TextField
//             onChange={(e) => setSurName(e.target.value)}
//             label="Surname"
//             variant="standard"
//             inputProps={{
//               style: { textTransform: "capitalize" },
//             }}
//             sx={{ width: "100%" }}
//             value={surName}
//           />
//           <Button
//             onClick={() => {
//               editAuth();
//               handleMouseLeave();
//             }}
//             sx={{ width: "50%" }}
//             variant="contained"
//           >
//             edit
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditAuth;

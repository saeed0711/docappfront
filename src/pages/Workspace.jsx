import React, { useState } from "react";

const Workspace = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [actionType, setActionType] = useState("");
  const [name, setName] = useState("");

  const openPopup = (type) => {
    setActionType(type);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${actionType} created: ${name}`);
    closePopup();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Workspace</h1>
      <button onClick={() => openPopup("Folder")}>Create a Folder</button>
      <button onClick={() => openPopup("Chatbot")}>Create a Chatbot</button>

      {popupVisible && (
        <div style={popupStyles.overlay}>
          <div style={popupStyles.popup}>
            <h2>Create a {actionType}</h2>
            <form onSubmit={handleSubmit}>
              <label>
                {actionType} Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <div style={{ marginTop: "10px" }}>
                <button type="submit">Submit</button>
                <button type="button" onClick={closePopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const popupStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    background: "white",
    padding: "20px",
    borderRadius: "5px",
    width: "300px",
    textAlign: "center",
  },
};

export default Workspace;

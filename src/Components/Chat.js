import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../Firebase-Config";



export const Chat = ({ room }) => {
  const [newMassage, setNewMassage] = useState("");
  const massagesRef = collection(db, "massages");
  const [massages, setMassages] = useState([]);

  useEffect(() => {
    const queryMassages = query(
      massagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMassages, (snapshot) => {
      let massages = [];
      snapshot.forEach((doc) => {
        massages.push({ ...doc.data(), id: doc.id });
      });
      setMassages(massages);
    });

    return () => unsuscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMassage === "") return;

    await addDoc(massagesRef, {
      text: newMassage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMassage("");
  };

  return (
    <div>
      <div >
        <h1>Welcome to: {room.toUpperCase()}'s room</h1>
      </div>
      <div >
        {massages.map((massage) => (
          <div >
            <span>{massage.user.toUpperCase()} :  </span>
            <br />
            {massage.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type your massage here"
          onChange={(e) => setNewMassage(e.target.value)}
          value={newMassage}
        />
        <button type="submit">
         send
        </button>
      </form>
    </div>
  );
};

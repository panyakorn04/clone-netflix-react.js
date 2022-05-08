import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}
